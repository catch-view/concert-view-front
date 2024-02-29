export const quillConfig = {
  theme: 'snow', // You can change the theme if needed
  modules: {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }, 'link', 'image'],
      ],
    },
  },
  formats: [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'link',
    'image',
    'blockquote',
    'code-block',
  ],
  placeholder: '내용을 작성하세요',
};
