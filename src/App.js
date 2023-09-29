import { useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';


function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");


  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList);
  };

  const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  }



  return (
    <div style={{ height: '100vh' }} className='background d-flex justify-content-center align-items-center '>
      <div style={{ width: '600px' }} className='box   rounded p-4'>
        <div className='heading'>
          <div className='head text-center  '>Todo-List</div>
          <p className='sub text-center fw-4 '> - A Simple React Todo List App -</p>

          <hr />
        </div>
        <h3 >New Todo</h3>
        <form className=' justify-content-center align-items-center '>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField style={{ width: '450px' }} value={input} type='text' className='txtbox' id="outlined-basic" label="Add a Todo..." variant="outlined" onChange={(e) => setInput(e.target.value)} />
            <Button style={{ backgroundColor: 'lightgreen' }} className='btn' variant="contained" onClick={() => addTodo(input)}>Add todo</Button>
          </div>
          <div className='display'>
            <ul >
              {list.map((todo) => (
                <li onClick={handleClick} className='libox' key={todo.id} >
                  {todo.todo}
                  <div className='ms-auto me-2'>
                    <i onClick={() => deleteTodo(todo.id)} className="fa-solid fa-trash-can  " style={{ color: 'black' }}></i>
                  </div>
                 
                </li>


              ))}
            </ul>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
