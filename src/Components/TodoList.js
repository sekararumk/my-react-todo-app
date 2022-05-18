import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title.toUpperCase()} />
          <ul className="list-group list-group-flush">
            { props.items.map((item, index) => (
              <TodoItem item={item} key={index} />
            ))}
          </ul>
        </div>  
  )
}

export default ToDoList