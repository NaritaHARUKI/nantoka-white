import React from 'react'
import { useController } from 'react-hook-form'
import ErrMessage from './ErrMessage'
import StyledInput from './StyledInput'


const FormInput = (props)=> {
    const { field, formState: { errors } } = useController(props)
    const { name, title, fontSize } = props

    return (
      <div style={{textAlign:"left"}}>
        {title && <label>{title}</label>}
        <br/> 
        <StyledInput {...field} fontSize={fontSize}/>
        {/*// @ts-ignore */}
        {errors && <ErrMessage>{errors[name]?.message}</ErrMessage>} 
      </div>
    )
}

export default FormInput

