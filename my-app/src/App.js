import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const [state, setState] = useState([{ counter: 1 }, { counter: 11 }]);
  const [stateAdd,setAddState]=useState('5')
  const hendelEncriment = function (index) {
    const newState = [...state];
    newState[index].counter++;
    setState(newState);
  };

  const hendelDecriment = function (index) {
    const newState = [...state];
    newState[index].counter--;
    setState(newState);
  };

  const addTodo=function(){
    setState(prew=>[...prew,{counter:stateAdd}])
  }

  const myFunc=function(e){
    
    setAddState(e.target.value)
    
  }
  return (
    <div >
      <input type="number"placeholder="Numéro" className="border p-4 outline-none ml-20" onChange={myFunc}></input>
      <button className=" ml-20 mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow myCenter " onClick={addTodo}>add counter</button>
      {state.map((item, index) => (
        <Counter
          key={index}
          id={index}
          item={item.counter}
          onEncriment={hendelEncriment}
          onDecriment={hendelDecriment}
          

        />
      ))}
    </div>
  );
}

export default App;
