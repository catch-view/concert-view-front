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
      console.log(values, htmlValue, 'TEST');
    },
    enableReinitialize: true,
  });

  const [htmlValue, setHtmlValue] = useState<string>('');

  const handleEditorValuechange = useCallback((value: string) => {
    setHtmlValue(value);
  }, []);

  const testFunc = () => {
    console.log(formik.values.author, formik.values.password);
  };

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
          id="author"
          name="author"
          label="작성자"
          color="success"
          sx={{ marginRight: '1rem' }}
          value={formik.values.author}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.author)}
          helperText={formik.errors.author}
        />
        <TextField
          id="pasword"
          name="password"
          color="success"
          type="password"
          label="비밀번호"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
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
