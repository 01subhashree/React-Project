import { Routes, Route } from 'react-router-dom';
import Homepage from './webpage/Homepage';
import Loginpage from './webpage/Login';
import Resister from './webpage/Resister';



function App() {
  return (
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
      </Routes>

    </div>
  );
}

export default App;
