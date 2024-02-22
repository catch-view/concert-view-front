import { useRef, useMemo, useState, memo } from 'react';
import { Box, styled } from '@mui/material';

// react-quill
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { quillConfig } from './quillConfig';

import { uploadPostImage } from 'src/apis/post';

Quill.register('modules/ImageResize', ImageResize);

const EditorWrapper = styled(Box)({
  height: '580px',
});

interface QuillEditorProps {
  htmlValue: string;
  onChange: (content: string) => void;
}
const QuillEditor = ({ htmlValue, onChange }: QuillEditorProps) => {
  const quillRef = useRef<ReactQuill>(null);

  // quill-editor 커스텀 이미지 핸들러
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const editor = quillRef?.current?.getEditor();
      const range = editor?.getSelection(true);
      const file = input.files ? input.files[0] : null;
      if (!editor || !file || !range) return;

      const html = quillRef.current?.value as string;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('html', html);
      const result = await uploadPostImage(formData);
    });
  };

  /**
   * 게시글 작성 취소 버튼 클릭 처리 메소드
   * firebase에 등록된 게시글 이미지들을 모두 제거
   */
  /* const handleCancelBtnClick = () => {
    activateSnack('포스트 작성을 취소하시겠습니까?', 'danger');
    postImages.forEach(async (imagePath) => {
      const imgRef = ref(storage, imagePath);
      // Delete the file
      await deleteObject(imgRef);
    });
  }; */

  // quill-editor 모듈
  const modules = useMemo(() => {
    return {
      toolbar: {
        ...quillConfig.modules.toolbar,
        handlers: {
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      },
    };
  }, []);

  return (
    <EditorWrapper>
      <ReactQuill
        style={{
          margin: '0.5rem',
          border: 'none',
          height: '500px',
        }}
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

export default memo(QuillEditor);
