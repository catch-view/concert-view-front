import { useRef, useMemo, useState, memo } from 'react';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { Box, styled } from '@mui/material';

// project imports
import { storage } from 'src/firebase';

// react-quill
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { quillConfig } from './quillConfig';

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

      try {
        // 파일명을 "image/Date.now()"로 저장
        const storageRef = ref(storage, `image/${Date.now()}`);
        // Firebase Method : uploadBytes, getDownloadURL
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // 이미지 URL 에디터에 삽입
            editor.insertEmbed(range.index, 'image', url);
            // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
            editor.setSelection(range.index, range.index + 1);
          });
        });
      } catch (error) {
        console.log(error);
      }
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
