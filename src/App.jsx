import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'

//Components
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'



function App() {
  
  const currentUser = true
  
  //Make main layout
  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div style={{display : 'flex'}}>
          <Leftbar/>
          <div style={{flex: '6'}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  //Redirect if user doesn`t login
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login' />
    }
    
    return children
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route path='/' element={<Home/>} />
          <Route path='/profile/:id' element={<UserProfile/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

App.propTypes = {
  children : PropTypes.any
}

export default App
