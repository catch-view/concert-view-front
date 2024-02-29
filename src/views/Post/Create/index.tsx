import { useState, useCallback } from 'react';
import { Box, Fab, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import randomColor from 'randomcolor';

// icons
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

// project imports
import LoadingDialog from 'src/components/common/LoadingDialog';
import PostTag from 'src/components/atoms/PostTag';
import { ViewContainer } from 'src/views/styled';
import { DisplayingErrorMessagesSchema } from './schemas';
import QuillEditor from 'src/components/common/QuillEditor';
import useSnackAlert from 'src/hooks/useSnackAlert';
import { useCreatePostMutation } from 'src/tanstack/mutations/post';
import * as Styled from './styled';
import { Tag } from 'src/interfaces/post';

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
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      handleSubmit();
    },
    enableReinitialize: false,
    validateOnBlur: true,
  });

  const [tags, setTags] = useState<Tag[]>([]);
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
      placeName: state.placeName,
      placeAddress: state.placeAddress,
      tags: tags,
      author: formik.values.author,
      password: formik.values.password,
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
    const newTag: Tag = {
      label: formik.values.inputTag,
      bgColor: randomColor(),
      color: 'black',
    };
    setTags([...tags, newTag]);
    formik.values.inputTag = '';
  };

  return (
    <ViewContainer>
      {status === 'pending' && <LoadingDialog />}
      <Styled.TopTextBox>
        <Typography variant="h5" color={'rgba(0,0,0,0.5)'}>
          #{state.placeName}&nbsp;
        </Typography>
        <Typography variant="h6" color={'rgba(0,0,0,0.3)'}>
          #{state.addressName}
        </Typography>
      </Styled.TopTextBox>
      <Styled.TextFieldsBox>
        <TextField
          size="small"
          id="author"
          name="author"
          label="작성자"
          color="success"
          sx={{ marginRight: '1rem' }}
          value={formik.values.author}
          onChange={formik.handleChange}
          error={
            Boolean(formik.values.author.length) &&
            Boolean(formik.errors.author)
          }
          helperText={
            Boolean(formik.values.author.length) && formik.errors.author
          }
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
        <Styled.TagsBox>
          {tags.map((tag: Tag, idx: number) => (
            <PostTag key={idx} label={tag.label} bgColor={tag.bgColor} />
          ))}
        </Styled.TagsBox>
      </Styled.TextFieldsBox>

      <QuillEditor htmlValue={htmlValue} onChange={handleEditorValuechange} />

      <Box
        sx={
          {
            //display: 'flex',
          }
        }
      >
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
