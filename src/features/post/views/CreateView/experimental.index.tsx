import { useState, useCallback, useRef } from 'react';
import {
  Box,
  Stepper,
  StepLabel,
  Step,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import randomColor from 'randomcolor';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage } from 'src/firebase';

// icons
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

// project imports
import LoadingScreen from 'src/shared/components/Loading/LoadingScreen';
import PostTag from 'src/features/post/components/PostTag';
import { FlexStartContainer } from 'src/shared/styles/mui';
import { DisplayingErrorMessagesSchema } from './schemas';
import QuillEditor2 from 'src/shared/components/QuillEditor/noImageEditor';
import useSnackAlert from 'src/shared/hooks/useSnackAlert';
import { useCreatePostMutation } from '../../hooks/useCreatePostMutation';
import { useCreatePostFormik } from '../../hooks/useCreatePostFormik';
import * as Styled from './styled';
import { Tag } from '../../types';

const steps = ['장소 이미지 업로드', '장소 관련 태그 입력', '장소 설명 작성'];

const CreatePostView = () => {
  const { activateSnack } = useSnackAlert();
  const { mutateAsync, status } = useCreatePostMutation();

  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useCreatePostFormik({ handleSubmit: handleSubmit });

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const [tags, setTags] = useState<Tag[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [htmlValue, setHtmlValue] = useState<string>('');

  const [isWriting, setIsWriting] = useState(false); // 이미지 업로드 후 컨텐츠 작성중 여부

  const handleEditorValuechange = useCallback((value: string) => {
    setHtmlValue(value);
  }, []);

  /**
   * 게시물 저장 메서드
   */
  async function handleSubmit() {
    const { result, message } = await mutateAsync({
      placeID: state.placeID,
      tags: tags,
      author: formik.values.author,
      password: formik.values.password,
      title: formik.values.title,
      images: images,
      html: htmlValue,
      createdAt: new Date(),
    });
    if (result) {
      activateSnack(message || '', 'success');
      navigate(`/Post/${id}/1`, {
        state: {
          placeID: state.placeID,
          placeName: state.placeName,
          addressName: state.addressName,
        },
      });
    } else {
      activateSnack(message || '', 'danger');
    }
  }

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files ? input.files[0] : null;
      if (!file) return;

      try {
        // 파일명을 "image/Date.now()"로 저장
        const storageRef = ref(storage, `image/${Date.now()}`);
        // Firebase Method : uploadBytes, getDownloadURL
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImages((current) => [...current, url]);
          });
          setIsWriting(true);
        });
      } catch (error) {
        alert(error);
      }
    });
  };

  const addTag = () => {
    const isExist =
      tags.findIndex((tag: Tag) => tag.label === formik.values.inputTag) > -1;

    if (isExist) {
      activateSnack('이미 추가된 태그입니다', 'info');
      return;
    }

    const newTag: Tag = {
      label: formik.values.inputTag,
      bgColor: randomColor({
        luminosity: 'light',
        format: 'hsla',
      }),
      color: 'black',
    };
    setTags([...tags, newTag]);
    formik.values.inputTag = '';
  };

  const deleteTag = (label: string) => {
    setTags(tags.filter((tag: Tag) => tag.label !== label));
  };

  return (
    <FlexStartContainer>
      <LoadingScreen open={status === 'pending'} />
      <Styled.TopTextBox>
        <Typography variant='h5' color={'rgba(0,0,0,0.5)'}>
          #{state.placeName}&nbsp;
        </Typography>
        <Typography variant='h6' color={'rgba(0,0,0,0.3)'}>
          #{state.addressName}
        </Typography>
      </Styled.TopTextBox>

      <Styled.TextFieldsBox>
        <Box
          sx={{
            display: 'grid',
            justifyContent: 'flex-start',
            marginBottom: '1rem',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '15px',
          }}
        >
          {/* 작성자 input */}
          <TextField
            size='small'
            id='author'
            name='author'
            label='작성자'
            color='success'
            value={formik.values.author}
            onChange={formik.handleChange}
            error={
              Boolean(formik.values.author.length) &&
              Boolean(formik.errors.author)
            }
            helperText={
              Boolean(formik.values.author.length) && formik.errors.author
            }
            sx={{ marginRight: '1rem' }}
          />
          <TextField
            size='small'
            id='pasword'
            name='password'
            label='비밀번호'
            color='success'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              Boolean(formik.values.password.length) &&
              Boolean(formik.errors.password)
            }
            helperText={
              Boolean(formik.values.password.length) && formik.errors.password
            }
          />
        </Box>
        <TextField
          size='small'
          variant='standard'
          id='title'
          name='title'
          label='제목'
          color='success'
          value={formik.values.title}
          onChange={formik.handleChange}
          error={
            Boolean(formik.values.title.length) && Boolean(formik.errors.title)
          }
          helperText={
            Boolean(formik.values.title.length) && formik.errors.title
          }
        />
      </Styled.TextFieldsBox>

      <Divider sx={{ marginY: '2rem' }} />

      <Stepper activeStep={activeStep} sx={{ marginTop: '1.5rem' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {isWriting && (
        <Styled.TagsBox>
          {/* 태그 input */}
          <TextField
            size='small'
            variant='standard'
            id='inputTag'
            name='inputTag'
            label='#태그'
            color='info'
            value={formik.values.inputTag}
            onChange={formik.handleChange}
            onKeyDown={(e) => {
              if (e.key == 'Enter') addTag();
            }}
            error={
              Boolean(formik.values.inputTag.length) &&
              Boolean(formik.errors.inputTag)
            }
            helperText={
              Boolean(formik.values.inputTag.length) && formik.errors.inputTag
            }
          />
          <Styled.TagsList>
            {tags.map((tag: Tag, idx: number) => (
              <PostTag
                key={idx}
                label={tag.label}
                bgColor={tag.bgColor}
                onDelete={() => {
                  deleteTag(tag.label);
                }}
              />
            ))}
          </Styled.TagsList>
        </Styled.TagsBox>
      )}

      {isWriting ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={images.at(-1)}
            style={{ height: '320px', objectFit: 'contain' }}
          ></img>
          <QuillEditor2
            htmlValue={htmlValue}
            onChange={handleEditorValuechange}
          />
        </Box>
      ) : (
        <Styled.ImageUploadBox onClick={handleUploadClick}>
          <AddPhotoAlternateIcon sx={{ width: '100px', height: '100px' }} />
          <Typography variant='caption' color='grey.400' textAlign={'center'}>
            <b>{state.placeName}</b>의
            <br />
            사진을 올려보세요
          </Typography>
        </Styled.ImageUploadBox>
      )}
    </FlexStartContainer>
  );
};

export default CreatePostView;
