import { useState, useCallback } from 'react';
import { Box, Fab, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import randomColor from 'randomcolor';

// icons
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

// project imports
import LoadingScreen from 'src/shared/components/Loading/LoadingScreen';
import PostTag from 'src/features/post/components/PostTag';
import { ViewContainer } from 'src/shared/styles/mui';
import { DisplayingErrorMessagesSchema } from './schemas';
import QuillEditor from 'src/shared/components/QuillEditor';
import useSnackAlert from 'src/shared/hooks/useSnackAlert';
import { useCreatePostMutation } from '../../hooks/useCreatePostMutation';
import * as Styled from './styled';
import { Tag } from '../../types';

const CreatePostView = () => {
  const { activateSnack } = useSnackAlert();
  const { mutateAsync, status } = useCreatePostMutation();

  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      author: '',
      password: '',
      inputTag: '',
      title: '',
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      formik.handleSubmit();
      //handleSubmit();
    },
    enableReinitialize: false,
    validateOnBlur: true,
  });

  const [tags, setTags] = useState<Tag[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [htmlValue, setHtmlValue] = useState<string>('');

  const handleEditorValuechange = useCallback((value: string) => {
    setHtmlValue(value);
  }, []);

  /**
   * 게시물 저장 메서드
   */
  const handleSubmit = async () => {
    const { result, message } = await mutateAsync({
      placeID: state.placeID,
      tags: tags,
      author: formik.values.author,
      password: formik.values.password,
      title: formik.values.title,
      images: images,
      html: htmlValue,
      createdAt: new Date().toLocaleString(),
    });
    if (result) {
      activateSnack(message || '', 'success');
      navigate(`/Post/${id}`);
    } else {
      activateSnack(message || '', 'danger');
    }
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
    <ViewContainer>
      <LoadingScreen open={status === 'pending'} />
      <Styled.TopTextBox>
        <Typography variant="h5" color={'rgba(0,0,0,0.5)'}>
          #{state.placeName}&nbsp;
        </Typography>
        <Typography variant="h6" color={'rgba(0,0,0,0.3)'}>
          #{state.addressName}
        </Typography>
      </Styled.TopTextBox>

      <Styled.TagsBox>
        {/* 태그 input */}
        <TextField
          size="small"
          variant="standard"
          id="inputTag"
          name="inputTag"
          label="#태그😁"
          color="info"
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

      <Styled.TextFieldsBox>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          {/* 작성자 input */}
          <TextField
            size="small"
            id="author"
            name="author"
            label="작성자"
            color="success"
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
            size="small"
            id="pasword"
            name="password"
            label="비밀번호"
            color="success"
            type="password"
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
          size="small"
          variant="standard"
          id="title"
          name="title"
          label="제목"
          color="success"
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

      <QuillEditor
        htmlValue={htmlValue}
        images={images}
        setImages={setImages}
        onChange={handleEditorValuechange}
      />

      <Box sx={{ display: 'flex' }}>
        {/* 게시글 작성 취소 버튼 */}
        <Fab color="default" sx={{ marginRight: '0.5rem' }}>
          <CancelIcon />
        </Fab>

        {/* 게시글 등록 버튼 */}
        <Fab
          onClick={() => {
            formik.submitForm();
          }}
          color="success"
        >
          <SaveIcon />
        </Fab>
      </Box>
    </ViewContainer>
  );
};

export default CreatePostView;
