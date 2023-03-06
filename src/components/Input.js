import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function Input() {

  const [inputText, setInputText] = useState("");
  const [todo,setTodo] = useState([]);
  const [edit , setEdit] = useState(false);


  const onAddTodo = () => {
    if(inputText){
      setTodo([...todo,inputText]);
      setInputText("");
    }
  }

  const DeleteTodo = (uuidv4) => {
    let deleteTodo = [...todo];
    deleteTodo.splice(uuidv4,1);
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

      <button  key={uuidv4} onClick={onAddTodo}> Add </button>

      <div>
       
        {todo.map((t,id)=>(
          <>
            <h1 style={{resize : "none",height : "100px",width : "200px", backgroundColor: "#4d4d4d"}} key={t} contentEditable={edit}>{t}</h1>
            <i className="fa-solid fa-trash" key={id} onClick={DeleteTodo}></i>
            <i className="fa-solid fa-pen" onClick={()=> setEdit(true)}></i>
          </>
        ))}
      </div>
    </div>
  )
}

export default Input;
