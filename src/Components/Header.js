import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.title.toUpperCase()}</h1>
  )
}

export default Header