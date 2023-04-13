import { useState } from "react";
import {v4} from 'uuid';

function Input() {

  const [inputText, setInputText] = useState("");
  const [todo,setTodo] = useState([]);
  const [edit , setEdit] = useState(true);


  const onAddTodo = () => {
    if(inputText){
      setTodo([...todo,inputText]);
      setInputText("");
    }
  }

  const DeleteTodo = (v4) => {
    let deleteTodo = [...todo];
    deleteTodo.splice(v4,1);
    setTodo(deleteTodo);
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder='Write your todo' 
        value={inputText}
        onChange={e => setInputText(e.target.value)}

      />

      <button onClick={onAddTodo}> Add </button>

      <div>
       
        {todo.map((t)=>(
          <>
            <input 
              type="text"
              disabled={edit}
              value={t}
              onChange={(e)=> t = e.target.value}
              key={v4()}
            />
            <i className="fa-solid fa-trash" key={v4()} onClick={DeleteTodo}></i>
            <i className="fa-solid fa-edit" key={v4()} onClick={()=> setEdit(!edit)}></i>
          </>
        ))}
      </div>
    </div>
  )
}

export default Input;
