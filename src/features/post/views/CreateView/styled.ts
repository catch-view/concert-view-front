import { Box, styled, keyframes } from '@mui/material';

const wiggle = keyframes`
   0% { transform: skewX(6deg); } 
   10% { transform: skewX(-5deg); } 
   20% { transform: skewX(5deg); } 
   30% { transform: skewX(-3deg); } 
   40% { transform: skewX(3deg); } 
   50% { transform: skewX(-2deg); } 
   60% { transform: skewX(2deg); } 
   70% { transform: skewX(-1deg); } 
   80% { transform: skewX(1deg); } 
   90% { transform: skewX(0deg); } 
   100% { transform: skewX(0deg); } 
`;

export const TopTextBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
});

export const TextFieldsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flewWrap: 'wrap',
  marginTop: '1rem',
  width: '100%',
  height: '120px',

  '& .MuiTextField-root': {
    width: '240px',
  },
});

export const TagsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
  '& .MuiTextField-root': {
    width: '50%',
  },
}));

export const TagsList = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '0.5rem',
  flexWrap: 'wrap',
});

// 새로운 생성 페이지 관련

export const ImageUploadBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed rgba(0,0,0,0.1)',
  padding: '1rem',
  marginTop: '1.5rem',
  cursor: 'grab',
  borderRadius: '1rem',
});

export const EditorBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '360px',
  marginTop: '2rem',
});

export const CurrentImageBox = styled('img')({
  height: '320px',
  objectFit: 'contain',
  borderRadius: '0.5rem',
  marginRight: '1rem',
});

export const LeftFabBtnBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  bottom: '8rem',
  left: '4.5rem',
});

export const RightFabBtnBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  bottom: '8rem',
  right: '4.5rem',
});

export const UploadedImagesBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexGrow: 1,
});

export const UploadedImageCard = styled(Box)({
  position: 'relative',
  marginRight: '1rem',

  '&:hover': {
    animation: `${wiggle} 1s`,
  },
});

export const RedDot = styled(Box)({
  width: '32px',
  height: '32px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '-10px',
  right: '-10px',
  backgroundColor: 'rgba(0,0,0,0.7)',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'transform ease-in-out 0.1s',

  '&:hover': {
    transform: 'scale(1.1)',
  },
});
