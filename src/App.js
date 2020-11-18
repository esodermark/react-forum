import './App.css'
import PostContextProvider from './contexts/PostContext'
import UserContextProvider from './contexts/UserContext'
import { Switch, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import PostCreate from './pages/PostCreate'
import PostList from './pages/PostList'
import PostDetail from './pages/PostDetail'
import Home from './pages/Home'
import Navbar from './components/partials/Navbar'


function App() {
  return (
    <>
      <UserContextProvider>
      <PostContextProvider>
        <Navbar />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/posts/create' component={PostCreate} />
          {/* <Route path='/posts' component={PostList} />
          <Route path='/post/:id' component={PostDetail} /> */}
          <Route path='/' component={Home} />
        </Switch>
      </PostContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
