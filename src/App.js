import { Route,Routes } from 'react-router-dom';
import CreateText from './components/CreateText';
import ShowText from './components/ShowText';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/"  element ={< CreateText/>}  />
        <Route path="/inputdata"  element ={<ShowText/>} />
      </Routes>
    </div>
  );

}

export default App;
