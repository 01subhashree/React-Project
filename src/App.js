import { Provider } from "react-redux";
import Button from "./Button";
import ButtonTable from "./ButtonTable";
import store from "./reducer/store";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Button />
        <ButtonTable />
      </Provider>
    </>
  );
}

export default App;
