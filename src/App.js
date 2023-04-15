import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element ={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
