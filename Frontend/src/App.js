import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Create from './pages/create';
function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </>
  )
}
export default App;