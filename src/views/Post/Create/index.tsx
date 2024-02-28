import { useState, useCallback } from 'react';
import { Box, Fab, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

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

const CreatePostView = () => {
  const { activateSnack } = useSnackAlert();
  const { mutateAsync, status } = useCreatePostMutation();

  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      author: '',
      password: '',
      tags: [],
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      /* if (Boolean(formik.errors.author) || Boolean(formik.errors.password)) {
        activateSnack('입력 정보를 확인해주세요', 'danger');
        return;
      } */
      handleSubmit();
    },
    enableReinitialize: false,
    validateOnBlur: true,
  });

  const [htmlValue, setHtmlValue] = useState<string>('');

  const handleEditorValuechange = useCallback((value: string) => {
    setHtmlValue(value);
  }, []);

  /**
   * 게시물 저장 메서드
   */
  const handleSubmit = async () => {
    const { result, message } = await mutateAsync({
      placeID: id || '',
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
    //formik.values.tags.push()
  };

  return (
    <ViewContainer>
      {status === 'pending' && <LoadingDialog />}
      <Box sx={{ marginTop: '1rem' }}>
        <TextField
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

      <Styled.TagsArea>
        <TextField variant="standard" id="tag" name="tag" label="#태그😁" />
        <Styled.TagsBox>
          <PostTag label="테스트" />
        </Styled.TagsBox>
      </Styled.TagsArea>

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
          sx={{}}
        >
          <SaveIcon />
        </Fab>
      </Box>
    </ViewContainer>
  );
};

export default CreatePostView;
