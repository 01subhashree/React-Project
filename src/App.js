import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
    </>
  );
}

export default App;
