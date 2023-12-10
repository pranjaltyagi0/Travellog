import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Create from './pages/create';
import SignUp from './pages/signup';
import Mytrips from './pages/mytrips';
import Album from './pages/Album';
function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/album' element={<Album />}></Route>
        <Route path='/mytrips' element={<Mytrips />}></Route>
        {/* <Route path='/*' element={<>HHH</>}></Route> */}
      </Routes>

    </>
  )
}
export default App;