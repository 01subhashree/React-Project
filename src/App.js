import { Routes, Route } from 'react-router-dom';
import Homepage from './webpage/Homepage';
import Loginpage from './webpage/Login';
import Resister from './webpage/Resister';
import Navbar from './webpage/Navbar.js';
import AboutUs from './webpage/AboutUs.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Homepage />
        } />

        <Route path='/login' element={
          <Loginpage />
        } />

        <Route path='/Register' element={
          <Resister />
        } />
        <Route path='/aboutus' element={
          <AboutUs />
        } />
      </Routes>

    </div>
  );
}

export default App;
