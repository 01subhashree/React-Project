import Reactscroller from './components/Reactscroller.js'



function App() {

  return (
    <div className="App">
      <div className='Header'>
        <h2>Know your mentors</h2>
        <p>Mind your mentor's time. Good mentors are successful for a reason: They manage their time wisely, often doing multiple things at any given time in order to ensure success. As a mentee, you must learn to respect your mentor's time.</p>
      </div>
      <div className='wrapper'>
        <Reactscroller />
      </div>
    </div>
  );
}

export default App;

