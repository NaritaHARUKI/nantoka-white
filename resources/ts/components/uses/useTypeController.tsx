import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../redux/store/store'
import PostApi from '../Tags/api/PostApi'

const useTypeController =({data,top={},id=null,type={}})=> {
    const navigate = useNavigate()
    const userData = store.getState().user

    const handleOnClick = () =>{  
        type === 'create' ? navigate(`/edit/${data.id}`) : navigate(`/detail/${data.id}`)
    }
    const [gooded,setGooded] = useState<Array<number>>([]);

    const handleGood = (e)=>{
        const userData = store.getState().user
        if (!userData.isLogin) navigate("/login") 
        if(userData.isLogin){
            e.target.style.backgroundColor === 'red' ? e.target.style.backgroundColor = '' : e.target.style.backgroundColor = 'red'
            PostApi.post('/handleGood',{userId: userData.id,workId: Number(e.target.value)}).then((res)=>{
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    useEffect(()=>{
        PostApi.post('/getGooded',{userId: userData.id}).then((res)=>{
            let goodedList:number[] = []
            for(let i=0; i< res.data.length; i++){
                goodedList.push(res.data[i].workId);
            }
            setGooded(goodedList)
        }).catch((err)=>{
            // console.log(err)
        })
    },[])

    useEffect(()=>{
        PostApi.post('/getGooded',{userId: userData.id}).then((res)=>{
            let goodedList:number[] = []
            for(let i=0; i< res.data.length; i++){
                goodedList.push(res.data[i].workId);
            }
            setGooded(goodedList)
        }).catch((err)=>{
            // console.log(err)
        })
    },[data])

    useEffect(()=>{
        PostApi.post('/getGooded',{userId: userData.id}).then((res)=>{
            let goodedList:number[] = []
            for(let i=0; i< res.data.length; i++){
                goodedList.push(res.data[i].workId);
            }
            setGooded(goodedList)
        }).catch((err)=>{
            // console.log(err)
        })
    },[userData])

    const GoodButton = ()=>{
        const userData = store.getState().user
        if(!userData.isLogin) return  
        if(!top) return 
        return (
            gooded.includes(data.id)
            ? <button value={data.id} onClick={handleGood} style={{backgroundColor:"red"}}>いいね</button>
            : <button value={data.id} onClick={handleGood}>いいね</button> 
        )
    }

    return { GoodButton, handleOnClick }
}

export default useTypeController
