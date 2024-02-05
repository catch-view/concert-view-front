// QuillEditor.tsx
import React, { useRef, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css'; // or import your preferred Quill theme
import { quillConfig } from './quillConfig';

// Import Quill's image handler module
//import ImageUploader from 'quill-image-uploader-ts';
const font = Quill.import('formats/font');
font.whitelist = [`"Noto Serif KR", serif`];
Quill.register(font, true);

Quill.register('modules/ImageResize', ImageResize);
// Register Quill's image handler module
//Quill.register('modules/imageUploader', ImageUploader);

interface QuillEditorProps {
  onChange: (content: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ onChange }) => {
  const quillRef = useRef<ReactQuill>(null);

  // Define the handler for image upload
  /* const handleImageUpload = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      // Replace 'YOUR_IMAGE_UPLOAD_API_ENDPOINT' with your actual API endpoint
      const response = await axios.post<string>(
        quillConfig.imageUploadEndpoint,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data; // Assuming the API returns the image URL
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }; */

  const modules = useMemo(() => {
    return {
      toolbar: {
        ...quillConfig.modules.toolbar,
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      },
    };
  }, []);

  return (
    <ReactQuill
      style={{
        width: '100%',
        height: '100%',
        margin: '0.5rem',
        border: 'none',
      }}
      ref={quillRef}
      theme={quillConfig.theme}
      modules={modules}
      formats={quillConfig.formats}
      placeholder={quillConfig.placeholder}
      onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
    />
  );
};

export default QuillEditor;
