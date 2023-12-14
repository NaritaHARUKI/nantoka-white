import React, { useEffect } from 'react'
import EditCSS from './EditCSS'
import { useNavigate } from 'react-router-dom'
import store from '../redux/store/store'

const Create = ()=>{

  const navigate = useNavigate()

  useEffect(()=>{
    const user = store.getState().user
    if(!user.isLogin){
      navigate('/')
    }
  },[])

  return (
    <EditCSS/>
  )
}

export default Create




