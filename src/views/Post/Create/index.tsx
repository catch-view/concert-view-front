import { useState, useCallback } from 'react';
import { Box, Fab, TextField } from '@mui/material';
import { Formik, useFormik } from 'formik';
import QuillEditor from 'src/components/common/QuillEditor';
import 'react-quill/dist/quill.snow.css';

// icons
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

// project imports
import { ViewContainer } from 'src/views/styled';
import { DisplayingErrorMessagesSchema } from './schemas';

const CreatePostView = () => {
  const formik = useFormik({
    initialValues: {
      author: '',
      password: '',
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      // same shape as initial values
      console.log(values);
    },
  });

  const [htmlValue, setHtmlValue] = useState<string>('');

  const handleEditorValuechange = useCallback((value: string) => {
    console.log(formik.values);
    setHtmlValue(value);
  }, []);

  /**
   * 게시물 저장 메서드
   */
  /*  const handleSubmit = () => {
    if (!author || !password || !htmlValue) return;
  }; */

  return (
    <ViewContainer>
      <Box sx={{ marginTop: '1rem' }}>
        <TextField
          name="author"
          label="작성자"
          color="success"
          sx={{ marginRight: '1rem' }}
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <TextField
          name="password"
          color="success"
          type="password"
          label="비밀번호"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </Box>
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
        <Fab type="submit" color="success" sx={{}}>
          <SaveIcon />
        </Fab>
      </Box>
    </ViewContainer>
  );
};

export default CreatePostView;
