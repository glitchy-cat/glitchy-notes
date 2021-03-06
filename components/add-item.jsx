import React, { useState, useEffect } from "react";
import Todoitem from "./todo-item.jsx";

function Addtodo(props) {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const onInputChange = async (e) => {
    setInputText(e.currentTarget.value);
  };

  const addItem = async () => {
    let exists = false
    if (inputText.trim().length > 0) { 
      list.forEach(element => {
        if (element === inputText) {
          alert('Task already exists.');
          exists = true
        }

      });
      if (exists === false) {
        setList([...list, inputText]);
        setInputText("");
      }
    }
  };

  const onEnterPress = async (e) => {
    if (e.key === "Enter") {
      addItem()
    }
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
            onKeyDown={onEnterPress}
          />
        </div>
        <div className={"p-2"}>
          <button
            className={
              "p-1 rounded pl-3 pr-3 cursor-pointer text-white text-xl bg-blue-500"
            }
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>

      <br />
      <br />
      {list.length>0 &&
      <div className={"bg-gray-100 p-2 rounded"}>
        <ul>
          {list.map((item, idx) => {
            return <Todoitem key={idx} setList={setList} item={item} list={list}  />;
          })}
        </ul>
      </div>
    }</div>
  );
}

export default Addtodo;
