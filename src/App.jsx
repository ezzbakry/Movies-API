import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Form/Login'
import Movies from './pages/Movies/Movies'
import Moviedetails from './pages/Movies/Moviedetails'
import Notfound from './pages/Notfound/Notfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/moviedetails/:id' element={<Moviedetails></Moviedetails>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>


        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
