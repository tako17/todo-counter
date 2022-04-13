import "../style/output.css";

const Counter = function ({ item, id, onEncriment, onDecriment }) {
  return (
    <div className=" flex m-5 ">
      <span className="m-5 w-7">{item}</span>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        onClick={() => onEncriment(id)}
      >
        increment
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onDecriment(id)}
      >
        decriment
      </button>
    </div>
  );
};

export default Counter;
