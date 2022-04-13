import { useState } from "react";
import "../style/output.css";

const MyTodo = () => {
  const [state, setState] = useState([{subject:'study', color:'red'},{subject:'clear', color:'red'},{subject:'sing', color:'red'} ]);
  const [userInput, setUserInput] = useState({subject:'', color:'red'});
  //  const addTodo=()=>{
  //      const newState=[...state]
  //      setState()
  //  }
  const done=(index)=>{
   const newState=[...state];
   newState[index].color=`green`
   console.log(newState);
   
   setState(newState)
  }
  const change = (e) => {
    setUserInput({subject:e.target.value,color:'red'});
  };
  const addTodo = () => {
    const newState = [...state, userInput];
    userInput.subject&&setState(newState);
   setUserInput({subject:'', color:'red'});
  };
  const deleteItem=index=>{
      const newState=[...state]
      newState.splice(index,1)
      setState(newState)
  }
  return (
    <div className="w-52 mt-5 ">
      <div className="flex justify-between ">
        <input
          type="text"
          placeholder="Hello"
          className="p-3 m-3 border-2"
          onChange={(e) => change(e)}
          value={userInput.subject}
        ></input>
        <button
          className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1"
          onClick={addTodo}
        >
          add todo
        </button>
      </div>
      <ul className="p-6  text-left  ">
        {state.map((item, index) => (
          <li
            key={index}
            className="flex justify-between w-52 items-center cursor-pointer"
          >
          
            <span className={`text-${item.color}-400`} onClick={()=>done(index)}>{item.subject}</span>
            <span className={`hover:text-red-900 text-red-400` }onClick={()=>deleteItem(index)}>X</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTodo;
