import './Navbar/Navbar.css'
import Navbar from './Navbar/navbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <div className='wrapper'>
        <header className="App-header">
          <h4>TOTALLY FREE</h4>
          <h1>Let's bring your team together in onclick</h1>
        </header>
        <div className='content'>
          <button className='btn'>Get Started</button>
          <i className="fa fa-play" aria-hidden="true">How to use</i>
        </div>
      </div>
    </div>
  );
}

export default App;
