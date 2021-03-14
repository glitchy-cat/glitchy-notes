import React, { useState, useEffect } from "react";

function Addtodo(props) {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const onInputChange = async (e) => {
    console.log(e.currentTarget.value);
    setInputText(e.currentTarget.value);
  };

  const addItem = async () => {
    setList([...list, inputText]);
  };

  return (
    //todos page
    <div className={"m-10 p-5 border"}>
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"p-2"}>
          <input
            className={"border w-1/2 p-1 border-gray-300 rounded"}
            type="text"
            placeholder="Enter tasks"
            value={inputText}
            onChange={onInputChange}
          />
        </div>
        <div className={"p-2"}>
          <button className={'p-1 rounded pl-3 pr-3 cursor-pointer text-white text-xl bg-blue-500'} onClick={addItem}>
            Add
          </button>
        </div>
      </div>

      <br/>
      <br/>
      <div className={'bg-gray-100 p-2 rounded'}>
        <ul>
          <li className={'border-b-2 border-cool-gray-300'}>
            <input type="checkbox"/>&nbsp;&nbsp;
            <span className={'text-gray-700 font-semibold text-sm'}>Work on project</span>
          </li>
        </ul>
      </div>

      <ul>
        {list.map((item, idx) => {
          return <li key={idx}> {item} </li>;
        })}
      </ul>
      


        




    </div>
  );
}

export default Addtodo;
