import { Card, Grid, Typography, CardContent, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

// project imports
import PostTag from '../../components/PostTag';
import { ViewContainer } from 'src/shared/styles/mui';
import * as Type from '../../types';

const PostDetailView = () => {
  const { state } = useLocation();
  const { post } = state;

  return (
    <ViewContainer>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardContent>
              {/* 제목 */}
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>

              {/* 작성자, 작성일 */}
              <Typography color="textSecondary">
                by {post.author} on {post.createdAt}
              </Typography>

              {/* 태그 표시 */}
              <Paper elevation={0} style={{ padding: '8px' }}>
                {post.tags.map((tag: Type.Tag) => (
                  <PostTag key={tag.label} {...tag} />
                ))}
              </Paper>

              {/* HTML 내용 표시 */}
              <Typography
                variant="body2"
                color="textSecondary"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </ViewContainer>
  );
};

export default PostDetailView;
