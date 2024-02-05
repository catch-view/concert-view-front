import React, { useState } from 'react';
import QuillEditor from './QuillEditor';
import 'react-quill/dist/quill.snow.css';

import { ViewContainer } from 'src/views/styled';

const CreatePostView = () => {
  const [htmlValue, setHtmlValue] = useState('');

  const handleEditorValuechange = (value: string) => {
    setHtmlValue(value);
  };

  return (
    <ViewContainer>
      <QuillEditor onChange={handleEditorValuechange} />
    </ViewContainer>
  );
};

export default CreatePostView;
