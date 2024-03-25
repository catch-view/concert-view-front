import { Box, Card, CardContent, styled } from '@mui/material';

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

export const PostContentBox = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 auto',
  width: '320px',
});

export const TagsBox = styled(Box)({
  display: 'flex',
  marginTop: '1.5rem',
  flexGrow: 1,
  alignItems: 'flex-end',
});

export const AuthorInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  borderRadius: '16px',
  alignContent: 'center',
  alignItems: 'flex-end',
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
  alignItems: 'center',
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  borderRadius: '0.3rem',
  padding: '0 0.2rem 0.1rem 0.2rem',
  backgroundColor: 'rgba(0,0,0,0.6)',
});
