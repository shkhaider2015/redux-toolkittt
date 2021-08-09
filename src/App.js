import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./State/Slice";

function App() {

  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> {counter} </h1>

      <button 
        style={{ margin : 10 }} 
        onClick={() => dispatch(increment())}
        >Increment</button> 
      
      <button 
        style={{ margin : 10 }}
        onClick={() => dispatch(decrement())}
        >Decrement</button>
    </div>
  );
}

export default App;
