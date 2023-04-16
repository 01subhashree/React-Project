import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Homepage'
import CheckTask from './pages/CheckTask '


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checktask" element={<CheckTask />} />
      </Routes>
    </div>
  );
}

export default App;
