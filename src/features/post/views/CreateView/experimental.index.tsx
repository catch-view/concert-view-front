import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Stepper,
  StepLabel,
  Step,
  TextField,
  Typography,
  Fab,
  Skeleton,
} from '@mui/material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import randomColor from 'randomcolor';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage } from 'src/firebase';

// icons
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';

// project imports
import LoadingScreen from 'src/shared/components/Loading/LoadingScreen';
import PostTag from 'src/features/post/components/PostTag';
import { FlexStartContainer } from 'src/shared/styles/mui';
import QuillEditor2 from 'src/shared/components/QuillEditor/noImageEditor';
import ColorlibStepIcon from './Stepper/ColorLibStepIcon';
import useSnackAlert from 'src/shared/hooks/useSnackAlert';
import { useCreatePostMutation } from '../../hooks/useCreatePostMutation';
import { useCreatePostFormik } from '../../hooks/useCreatePostFormik';
import useStepper from '../../hooks/useStepper';
import * as Styled from './styled';
import { ColorlibConnector } from './Stepper/styled';
import { Tag } from '../../types';

const steps = ['장소 이미지 업로드', '장소 관련 태그 입력', '장소 설명 작성'];

const CreatePostView = () => {
  const { activateSnack } = useSnackAlert();
  const { mutateAsync, status } = useCreatePostMutation();

  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useCreatePostFormik({ handleSubmit: handleSubmit });

  const [tags, setTags] = useState<Tag[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [htmlValue, setHtmlValue] = useState<string>('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleEditorValuechange = useCallback((value: string) => {
    setHtmlValue(value);
  }, []);

  const { activeStep, skipped, handleNext, handleBack, handleSkip } =
    useStepper();

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
          handleSkip();
        });
      } catch (error) {
        alert(error);
      }
    });
  };

  const handleDisplayImage = (image: string) => {
    setImageLoaded(false);
    const uploadedImage = new Image();
    uploadedImage.src = image;
    uploadedImage.onload = () => {
      setImageLoaded(true);
    };
  };
  useEffect(() => {
    if (activeStep === 2) handleDisplayImage(images.at(-1) ?? '');
  }, [activeStep]);

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

      <Stepper
        alternativeLabel
        connector={<ColorlibConnector />}
        activeStep={activeStep}
        sx={{ marginTop: '1.5rem' }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/**
       * 단계별 컨텐츠
       */}
      {activeStep == 0 && (
        <Styled.ImageUploadBox onClick={handleUploadClick}>
          <AddPhotoAlternateIcon sx={{ width: '100px', height: '100px' }} />
          <Typography variant='caption' color='grey.400' textAlign={'center'}>
            <b>{state.placeName}</b>의
            <br />
            사진을 올려보세요
          </Typography>
        </Styled.ImageUploadBox>
      )}

      {activeStep == 1 && (
        <Styled.TagsBox>
          {/* 태그 input */}
          <TextField
            size='medium'
            variant='standard'
            id='inputTag'
            name='inputTag'
            label='#태그'
            color='info'
            placeholder='사진을 설명할 수 있는 태그를 입력해보세요'
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

      {activeStep == 2 && (
        <Styled.EditorBox>
          {imageLoaded ? (
            <Styled.CurrentImageBox src={images.at(-1)} />
          ) : (
            <Skeleton
              variant='rectangular'
              sx={{ height: '320px', width: '568px', marginRight: '1rem' }}
            />
          )}

          <QuillEditor2
            htmlValue={htmlValue}
            onChange={handleEditorValuechange}
          />
        </Styled.EditorBox>
      )}

      <Styled.LeftFabBtnBox>
        {activeStep > 0 && (
          <Fab onClick={handleBack} color='secondary'>
            <ArrowBackIosIcon />
          </Fab>
        )}
      </Styled.LeftFabBtnBox>

      <Styled.RightFabBtnBox>
        {activeStep === 1 && (
          <Fab onClick={handleSkip} color='success'>
            <ArrowForwardIosIcon />
          </Fab>
        )}
        {activeStep === 2 && (
          <Fab color='info'>
            <SaveIcon />
          </Fab>
        )}
      </Styled.RightFabBtnBox>
    </FlexStartContainer>
  );
};

export default CreatePostView;
