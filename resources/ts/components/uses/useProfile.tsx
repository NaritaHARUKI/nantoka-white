import React, { useEffect, useState } from 'react'
import store from '../redux/store/store'
import { redirect, useNavigate } from 'react-router-dom'
import PostApi from '../Tags/api/PostApi'
import Actions from '../redux/Actions'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'

const useProfile =({setCreateList,setData,type,setGoodList,setType,isEditMode,setIsEditMode})=> {
    const navigate = useNavigate()
    const [ paginater,setPaginater ] = useState<any>()
    const dispatch = useDispatch()

    useEffect(()=>{
        PostApi.get('/loginSession',).then((res)=>{
            if(res.data.id){
                Actions.userData(res.data,dispatch)
                setData(store.getState().user)
                if(! store.getState().user.isLogin) navigate("/login")
                PostApi.post('/getCreateList',{id: Number(store.getState().user.id)}).then((res)=>{
                    setPaginater(res.data)
                    setCreateList(res.data.data)
                }).catch((err)=>{
                    console.log(err)
                })
                setData(store.getState().user)
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        const userData = store.getState().user
        if(type === 'create'){
            PostApi.post('/getCreateList',{id: userData.id}).then((res)=>{
                setPaginater(res.data)
                setCreateList(res.data.data)
            }).catch((err)=>{
                console.log(err)
            })
        }

        if(type === 'good'){
            PostApi.post('/getGoodList',{id: userData.id}).then((res)=>{
                console.log(res)
                setPaginater(res.data)
                setGoodList(res.data.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[type])

    const handleOnClick = (e)=>{
        setType(e.target.id)
    }

    const handleEdit = ()=>{
        isEditMode ? setIsEditMode(false) : setIsEditMode(true)
    }

    return { handleOnClick,handleEdit, paginater }
}

export default useProfile
