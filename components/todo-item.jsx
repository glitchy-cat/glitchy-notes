import React, { useState, useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa';

function Todoitem(props) {

    return(
        <li className={'border-b-2 border-cool-gray-200'}>
            <input type="checkbox"/>&nbsp;&nbsp;
            <span className={'text-gray-700 font-semibold text-sm'}>{props.item}<FaTrashAlt className={'float-right fill-current text-red-400 '} /></span>
          </li>
    );
}

export default Todoitem;