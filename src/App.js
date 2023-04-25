import Todos from "./todos/Todos";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <h1>My Todos</h1>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
