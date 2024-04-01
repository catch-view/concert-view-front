import { useRef, useMemo, memo, Dispatch } from 'react';
import { Box, styled } from '@mui/material';

// react-quill
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { quillConfig } from './quillConfig';

const EditorWrapper = styled(Box)({
  height: '100%',
  '& .ql-snow *': {
    fontFamily: 'Noto Serif KR',
  },
});

interface QuillEditorProps {
  htmlValue: string;
  onChange: (content: string) => void;
}
const QuillEditor2 = ({ htmlValue, onChange }: QuillEditorProps) => {
  const quillRef = useRef<ReactQuill>(null);

  // quill-editor 모듈
  const modules = useMemo(() => {
    return {
      /* toolbar: {
        ...quillConfig.modules.toolbar,
      }, */
    };
  }, []);

  return (
    <EditorWrapper>
      <ReactQuill
        style={{ height: '90%' }}
        ref={quillRef}
        theme={quillConfig.theme}
        modules={modules}
        formats={quillConfig.formats}
        placeholder={quillConfig.placeholder}
        value={htmlValue}
        onChange={(content, delta, source, editor) => {
          onChange(editor.getHTML());
        }}
      />
    </EditorWrapper>
  );
};

export default memo(QuillEditor2);
