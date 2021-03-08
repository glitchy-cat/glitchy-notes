import React, {useState, useEffect} from 'react';

function Addtodo(props) {

    const [inputText, setInputText] = useState('');
    const [list, setList] = useState ([]);
    
    const onInputChange = async (e) => {
        console.log(e.currentTarget.value);
        setInputText(e.currentTarget.value);
    }

    const addItem = async () => {
        setList([...list, inputText]);
    };

    return(
        
        <div>
                <input type="text" value={inputText} onChange={onInputChange} />
                <button onClick={addItem}>Enter task</button>

        <ul>
            {list.map((item, idx) => {
                return <li key={idx}> {item} </li>                
            })}
        </ul>


        </div>
    )

}


export default Addtodo;