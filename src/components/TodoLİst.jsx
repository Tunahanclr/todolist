import React from 'react'
import Todo from './Todo'

export default function TodoLİst({todos,setTodos,filteredTodos}) {

  return (
    <div className='todo-container'>
        <ul className='todo-list'>
                    {filteredTodos.map((todo)=>(
                        <Todo
                        text={todo.text}
                        key={todo.id}
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                        />
                    ))}
        </ul>
    </div>
  )
}
