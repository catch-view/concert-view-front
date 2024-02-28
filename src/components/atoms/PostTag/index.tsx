import { Chip } from '@mui/material';
import { Tag } from 'src/interfaces/post';

const PostTag = ({ label, bgColor, color }: Tag) => {
  return (
    <Chip
      label={label ? '#' + label : '응애'}
      sx={{
        backgroundColor: bgColor ? bgColor : 'rgba(0,0,0,0.2)',
        color: color ? color : 'black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    />
  );
};

export default PostTag;
