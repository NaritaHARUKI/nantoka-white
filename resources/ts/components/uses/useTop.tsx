import { useEffect, useState } from "react"
import store from "../redux/store/store"
import PostApi from "../Tags/api/PostApi";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/Actions";
import { redirect } from "react-router-dom";

const useTop = ({setData,setList,data,setPaginater,paginator})=>{

    {/*// @ts-ignore */}
    const userDataInit = useSelector((state) => state.cssData)
    const dispatch = useDispatch()

    useEffect(()=>{
        setData(store.getState().user)
    },[])

    useEffect(()=>{
        PostApi.post('/getList',{page: 1}).then((res)=>{
            setList(res.data.data)
            setPaginater(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        PostApi.get('/loginSession',).then((res)=>{
            if(res.data.id){
                Actions.userData(res.data,dispatch)
                setData(store.getState().user)
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[])
}

export default useTop