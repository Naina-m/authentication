import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home'
import PrivateRoute from './private route/PrivateRoute'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/register' element={<Auth registerpage/>}/>
      <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>

    </Routes>
    </>
  )
}

export default App
