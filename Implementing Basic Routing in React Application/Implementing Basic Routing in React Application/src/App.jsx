import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Users from './Pages/Users';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;
