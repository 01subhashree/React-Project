import './App.css';
import Events from './components/Events';
import Greetings from './components/Greeting';

function App() {
  return (
    <div className="App">
      <div>
        <Events/>
      </div>
      <div>
        <Greetings/>
      </div>
    </div>
  );
}

export default App;
