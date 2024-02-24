// import { useState } from "react";
import "./App.css";
import { useCountStore } from "./store";

function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const incByValue = useCountStore((state) => state.incByValue);
  // const [value, setValue] = useState("");
  const value = useCountStore((state) => state.value);
  const changeValue = useCountStore((state) => state.changeValue);
  return (
    <>
      <header>
        <button onClick={increment}>Inc</button>
        <input
          type="text"
          placeholder="Enter a value"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
        />
        <button onClick={() => incByValue(Number(value))}>Inc by Value</button>
        <h1>{count}</h1>
      </header>
    </>
  );
}

export default App;
