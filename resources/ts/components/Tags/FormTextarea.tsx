import React, { useCallback, useEffect, useState } from 'react'
import { useController } from 'react-hook-form'
import ErrMessage from './ErrMessage'
import { styled } from 'styled-components'
import StyledTextare from './StyledTextarea'


const FormTextarea = (props)=> {
    const { field, formState: { errors } } = useController(props)
    const { name, title } = props

    return (
      <div style={{textAlign:"left"}}>
        <label>{title}</label>
        <br/>
        <StyledTextare {...field}/>
        {/*// @ts-ignore */}
        <ErrMessage>{errors[name]?.message}</ErrMessage>
      </div>
    )
}

export default FormTextarea

