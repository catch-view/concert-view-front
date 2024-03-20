import { Box, Card, styled } from '@mui/material';

export const PostCard = styled(Card)({
  display: 'flex',
  width: '820px',
  backgroundColor: 'white',
  padding: '14px',
  margin: '0.5rem 0',
  border: 'transparent',
  boxShadow:
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
});

export const PostContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
});

export const TagsBox = styled(Box)({
  display: 'flex',
});

export const AuthorInfoBox = styled(Box)({
  display: 'flex',
  gap: 5,
  flexDirection: 'row',
  borderRadius: '16px',
  alignContent: 'center',
  alignItems: 'center',
  margin: '16px',
});

export const AuthorInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  marginTop: '2px',
});

export const ImageRateInfoBox = styled(Box)({
  display: 'flex',
  height: '28px',
  alignItems:'center',
  position: 'fixed',
  bottom: '30px',
  right: '50px',
  borderRadius: '0.3rem',
  padding: '0 0.2rem 0.1rem 0.2rem',
  backgroundColor: 'rgba(0,0,0,0.6)'
})