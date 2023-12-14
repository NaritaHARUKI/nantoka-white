import React , { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import store from "../redux/store/store"
import PostApi from "../Tags/api/PostApi"
import Actions from "../redux/Actions"

const Logout = ()=> {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    const userData = store.getState().user
    console.log(userData.id)
    if(userData.id === undefined) navigate('/')
    PostApi.post('/deleteSession',{id: Number(userData.id)}).then((res)=>{
        Actions.deleteUserdata(null,dispatch)
        window.location.href ='/'
    }).catch((err)=>{
        navigate('/')
    })
  },[])

  return(
    <></>
  )
}

export default Logout
