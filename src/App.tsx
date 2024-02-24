import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex bg-slate-50 p-10 border border-purple-300">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 rounded-md text-white px-3 py-2 text-xl"
        >
          Increment
        </button>
        <h1 className="mx-10 text-3xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 rounded-md text-white px-3 py-2 text-xl"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
