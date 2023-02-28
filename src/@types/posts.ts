export interface IPost {
  id?: number;
  title?: string;
  author?: string;
}

export interface IPostsState {
  isLoading: boolean;
  error: any;
  posts: IPost[];
  post: IPost;
}
