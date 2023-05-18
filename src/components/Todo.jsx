import React from 'react'

export default function Todo({text,todos,setTodos,todo}) {
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id !== todo.id))
    }
    const complateHandler=()=>{
        setTodos(todos.map((item)=>{
          if(item.id===todo.id){
            return {
              ...item,completed: !item.complated
          }
          }
          return item;
        }))
      }
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <button onClick={complateHandler} className='complete-btn'>
                <i className='fas fa-check-circle'></i>
            </button>
            <li className='todo-item'>{text}</li>
                <button onClick={deleteHandler} className='trash-btn'><i className='fa fa-minus-circle'></i>
                </button>
    </div>
  )
}
