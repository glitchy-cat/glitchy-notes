import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";


function Todoitem(props) {

function handleRemoveClick(task) {
    console.log(props.list)
    props.setList(props.list.filter(item => item !== task));

    }

  
return (
    <li className={"border-b-2 border-cool-gray-200 break-words"}>
      <input type="checkbox" />
      &nbsp;&nbsp;
      <span className={"text-gray-700 font-semibold text-sm"}>
        {props.item}
        <button className={'float-right'} onClick={() => handleRemoveClick(props.item)}>
          <FaTrashAlt className={"fill-current text-red-400 "} />
        </button>
      </span>
    </li>
  );
}

export default Todoitem;
