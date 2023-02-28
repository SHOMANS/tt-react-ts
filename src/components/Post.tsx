import { FC, HTMLProps } from 'react';
import { IPost } from '../@types/posts';

interface IProps extends HTMLProps<HTMLDivElement> {
  post: IPost;
}
const Post: FC<IProps> = ({ post, ...rest }) => {
  return (
    <div style={{ marginBottom: 20, marginLeft: 10 }} {...rest}>
      <h3>{post.title}</h3>
      <h3>author: {post.author}</h3>
    </div>
  );
};

export default Post;
