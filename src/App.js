import { useRecoilState } from 'recoil';
import { changeColor } from './atom';

function App() {

  const [atomChangeColor, setAtomChangeColor] = useRecoilState(changeColor)

  const clickhandler = () => {
    setAtomChangeColor(!atomChangeColor)
  }


  return (
    <div className="App">
      <h1 style={atomChangeColor ? { color: 'red' } : { color: 'blue' }}>hi, i change the color on click the button</h1>
      <button onClick={clickhandler}>Change color</button>
    </div>
  );
}

export default App;
