import { useRef, useMemo, memo, Dispatch } from 'react';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { Box, styled } from '@mui/material';

// project imports
import { storage } from 'src/firebase';
import { PostImage } from 'src/features/post/types';

// react-quill
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { quillConfig } from './quillConfig';

Quill.register('modules/ImageResize', ImageResize);

const EditorWrapper = styled(Box)({
  '& .ql-snow *': {
    fontFamily: 'Noto Serif KR',
  },
});

interface QuillEditorProps {
  htmlValue: string;
  images?: string[];
  setImages: Dispatch<React.SetStateAction<string[]>>;
  onChange: (content: string) => void;
}
const QuillEditor = ({
  images,
  setImages,
  htmlValue,
  onChange,
}: QuillEditorProps) => {
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
            setImages((current) => [...current, url ]);
            // 이미지 URL 에디터에 삽입
            editor.insertEmbed(range.index, 'image', url);
            // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
            editor.setSelection(range.index, range.index + 1);
          });
        });
      } catch (error) {
        alert(error);
      }
    });
  };

  /*  const imageDropHandler = (dataUrl, type, imageData) => {
    QuillImageDropAndPaste.
    const blob = QuillImageDropAndPaste.dataURLtoBlob(dataUrl);
    const file = new File([blob], 'image.png', { type: 'image/png' });
    imageHandler(file);
  };
 */
  // quill-editor 모듈
  const modules = useMemo(() => {
    return {
      toolbar: {
        ...quillConfig.modules.toolbar,
        imageDrop: false,
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
          width: '680px',
          height: '580px',
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
