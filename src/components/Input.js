import { useState } from "react";

function Input() {

  const [inputText, setInputText] = useState("");
  const [todo,setTodo] = useState([]);


  const onAddTodo = () => {
    if(inputText){
      setTodo([...todo,inputText]);
      setInputText("");
    }
  }

  return (
    <div>
      <input 
      type="text" 
      placeholder='Write your todo' 
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      />

      <button onClick={onAddTodo}> 
       Add
      </button>

      <div>
        {todo.map((t)=>(
          <p style={{height : "100px",width : "200px", backgroundColor: "#4d4d4d"}} key={t}>{t}</p>
        ))}
      </div>
    </div>
  )
}

export default Input;
