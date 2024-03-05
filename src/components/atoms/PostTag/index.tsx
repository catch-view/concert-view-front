import { Chip } from '@mui/material';
import { Tag } from 'src/interfaces/post';

interface PostTag extends Tag {
  onDelete?: any;
}
const PostTag = ({ label, bgColor, color, onDelete }: PostTag) => {
  return (
    <Chip
      label={'#' + label}
      sx={{
        backgroundColor: bgColor ? bgColor : 'rgba(0,0,0,0.2)',
        color: color ? color : 'black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        margin: '0.2rem',
      }}
      onDelete={onDelete ? onDelete : undefined}
    />
  );
};

export default PostTag;
