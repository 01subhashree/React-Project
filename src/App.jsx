import { useState } from "react";
import "./App.css";

export default function App() {
  const [pixel, setPixel] = useState(0);

  const handleChange = (e) => {
    setPixel(e.target.value);
  };

  return (
    <div>
      <h1>PIXEL TO REM CONVERSION</h1>
      <label htmlFor="pixel">Px:</label>
      <input name="pixel" type="number" value={pixel} onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="rem">rem:</label>
      <input name="rem" type="number" value={pixel / 16} placeholder="REM" />
    </div>
  );
}
