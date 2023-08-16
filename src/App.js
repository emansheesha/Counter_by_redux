import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DECREMENT, INCREMENT, RESET } from "./types/types";

function App() {
  // 4
  const counter = useSelector((state) => state.counter);
  const dispatch=useDispatch();
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={()=>dispatch({type:INCREMENT})}>+</button>
        <button className="control__btn" onClick={()=>dispatch({type:DECREMENT})}>-</button>
        <button className="reset" onClick={()=>dispatch({type:RESET})}>Reset</button>
      </div>
    </div>
  );
}

export default App;
