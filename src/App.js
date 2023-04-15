import { Routes, Route } from 'react-router-dom';
import Homepage from './component/HomePage';
import Loginpage from './component/LoginPage';
import Resister from './component/Resister';
import AboutUs from './component/AboutUs';
import Navbar from './component/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div className="App">
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
    </>
  );
}

export default App;
