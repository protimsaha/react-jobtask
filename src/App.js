import './App.css';
import { Routes, Route } from 'react-router-dom'
import Contents from './components/Contents/Contents';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Login/Signup';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Contents></Contents>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
