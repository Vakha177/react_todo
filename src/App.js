import { useState } from 'react';
import style from './App.css'
function App() {
  const [todos , setTodos] = useState( [
    {
      text: 'Купить бананы' ,
      favorite: false
    } ,
    {
      text: 'Заправить машину' ,
      favorite: false
    } ,
    {
      text: 'Отдохнуть' ,
      favorite: false
    }
  ] )
  

  const [text , setText] =useState('')

   const makeFavorit = (i) => {
    const newTodos = todos.map((item , index) => {
      if(i === index) {
       return {
        ...item, 
        favorite: !item.favorite
       }
      }
      return item 
      }
    )
  setTodos(newTodos)
   }
  
  const deleteTodo = (i) => {
    const filtered = todos.filter((todo , index)=> {
      if(index === i) {
        return false
      }
      return true
    }
    ) ;
    setTodos(filtered)
  }
  const addTodo = () => {
    setTodos([...todos , {
      text: text ,
      favorite: false
    }])
    setText('')
  }
  const newTodos= todos.map((todo , index)=>{
    return(
      <div className='todos'>
      <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
      <div className='favorite'>
        <button onClick={()=> makeFavorit(index)}>★</button>
       </div>
       <div className='todo_text'>
        {todo.text}
       </div>
       <div className='actions'>
       <button onClick={() => deleteTodo(index)}>❌</button>
       </div>
  
      </div>
      
      </div>
    )
  })
  return (
    <div className='app'>
    <div className='header'>
     Список дел
    </div>
    <div className='form'>
    <input
     placeholder='Введите дело'
     type='text'
     value={text}
     onChange={(e)=> setText(e.target.value)}
     />
    <button onClick={addTodo}>Добавить</button>
    </div>
   {newTodos}

    </div>
  );
}

export default App;
