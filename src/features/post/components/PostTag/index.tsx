import { Chip } from '@mui/material';
import { Tag } from '../../types';

interface PostTag extends Tag {
  onChipClick?: any;
  onDelete?: any;
}
const PostTag = ({ label, bgColor, color, onChipClick, onDelete }: PostTag) => {
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
      onClick={onChipClick ? onChipClick : undefined}
      onDelete={onDelete ? onDelete : undefined}
    />
  );
};

export default PostTag;
