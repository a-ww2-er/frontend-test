import React from 'react'

type InputProps = {
    type:string;
    placeholder:string;
    onChange?: () => void;
    value:string;
}
const Input = ({type, placeholder, onChange, value}: InputProps) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
  )
}

export default Input