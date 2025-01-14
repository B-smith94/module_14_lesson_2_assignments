import { Routes, Route } from 'react-router-dom'
import PostList from './Components/PostList'
import UserPosts from './Components/UserPosts'
import CreatePost from './Components/CreatePost'
import UpdatePost from './Components/UpdatePost'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostList />} />\
      <Route path='/post/:id' element={<UserPosts />} />
      <Route path='/create' element={<CreatePost />} />
      <Route path='/update/:id' element={<UpdatePost />} />
    </Routes>
  )
}

export default App
