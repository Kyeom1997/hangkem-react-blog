import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home'
import PostList from '../pages/posts'
import PostDetail from '../pages/posts/postDetail'
import PostAdd from '../pages/posts/postAdd'
import PostEdit from '../pages/posts/postEdit'
import Profile from '../pages/profile'
import Login from '../pages/login'
import SignUp from '../pages/signup'



export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/posts' element={<PostList/>} />
      <Route path='/posts/:id' element={<PostDetail/>} />
      <Route path='/posts/new' element={<PostAdd/>} />
      <Route path='/posts/edit/:id' element={<PostEdit/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path="*" element={<Navigate replace to='/'/>}/>
    </Routes>
  );
}
