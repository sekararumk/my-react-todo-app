import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'
import PaginateList from './PaginateList'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title.toUpperCase()}  addNewItem={props.addNewItem}/>
        <ul className="list-group list-group-flush">
            <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
        </ul>
      <Footer count={props.items.length} />
    </div>  
  )
}

export default ToDoList