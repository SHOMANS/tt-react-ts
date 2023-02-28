import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IPost } from './@types/posts';
import Post from './components/Post';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { createPostAction, getAllPostsAction } from './redux/slices/posts';

function App() {
  const [values, setValues] = useState<IPost>({});

  const dispatch = useAppDispatch();
  const { isLoading, posts } = useAppSelector((state) => state.posts);

  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    dispatch(createPostAction(values));
    setValues({});
  };

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dispatch(getAllPostsAction());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' id='' value={values.title} onChange={handleChange} />
        <input type='text' name='author' id='' value={values.author} onChange={handleChange} />
        <button>Submit</button>
      </form>
      {posts?.map((post) => (
        <Post key={post.id} post={post} className='Qaddoura' />
      ))}
    </div>
  );
}

export default App;
