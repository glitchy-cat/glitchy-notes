import { React, useState } from 'react';

function Form({ setInputText, inputText, todos, setTodos}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');
        console.log(todos)
    };

    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type='text' placeholder='Enter task here'></input>
                <button onClick={submitTodoHandler}>Add Todo</button>
            </form>
        </div>
    )
}

export default Form;
