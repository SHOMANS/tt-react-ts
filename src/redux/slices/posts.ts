import { createSlice } from '@reduxjs/toolkit';
import { IPost, IPostsState } from '../../@types/posts';
import axios from 'axios';
import { API_URL } from '../../api';

const initialState: IPostsState = {
  error: null,
  isLoading: false,
  post: {},
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const { getAllPosts, createPost, setLoading } = postsSlice.actions;

export const getAllPostsAction = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get(`${API_URL}posts`);
    dispatch(getAllPosts(res.data));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const createPostAction: (values: IPost) => any = (values) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.post(`${API_URL}posts`, values);
    dispatch(createPost(res.data));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};

export default postsSlice.reducer;
