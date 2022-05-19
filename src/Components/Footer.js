import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
        <span className="count-todos">
            {props.items.length}
            {props.items.length > 1 ? " item left" : " items left"}
        </span> 
    </div>
  )
}

export default Footer