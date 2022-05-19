import React from 'react'
import InputBox from './InputBox'

const Header = (props) => {
  return (
    <>
      <h1>{props.title.toUpperCase()}</h1>
      <InputBox addNewItem={props.addNewItem}/>
    </>
  )
}

export default Header