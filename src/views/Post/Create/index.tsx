import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Fab } from '@mui/material';
import QuillEditor from 'src/components/common/QuillEditor';
import 'react-quill/dist/quill.snow.css';

// icons
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

// project imports
import { ViewContainer } from 'src/views/styled';
import TextField from 'src/components/common/hookForm/TextField';

const CreatePostView = () => {
  const { control, watch } = useForm({
    defaultValues: { author: '', password: '' },
  });

  const author = watch('author');
  const password = watch('password');

  const [postData, setPostData] = useState({
    author: author,
    password: '',
    createdAt: '',
    htmlValue: '',
  });

  const handleEditorValuechange = useCallback((value: string) => {
    setPostData({
      ...postData,
      htmlValue: value,
    });
  }, []);

  return (
    <ViewContainer>
      <Box sx={{ marginTop: '1rem' }}>
        <TextField
          name="author"
          control={control}
          label="작성자"
          sx={{ marginRight: '1rem' }}
        />
        <TextField
          name="password"
          control={control}
          type="password"
          label="비밀번호"
        />
      </Box>
      <QuillEditor
        htmlValue={postData.htmlValue}
        onChange={handleEditorValuechange}
      />

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
        <Fab color="success" sx={{}}>
          <SaveIcon />
        </Fab>
      </Box>
    </ViewContainer>
  );
};

export default CreatePostView;
