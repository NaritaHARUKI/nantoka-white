import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostApi from '../Tags/api/PostApi';
import EditCSS from './EditCSS';

type IData = {
    id?: number,
    name: string;
    title: string;
    subtitle: string;
    content: string;
}

const Edit = ()=> {

  const { id } = useParams();
  const [ data,setData ] = useState<IData>({name:'',title:'',subtitle:'',content:''});

  useEffect(()=>{
    PostApi.post('/getDetail', {id: id}).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])


  if(data.name){
    return (
        <EditCSS id={id} data={data}/>
      )
  }
}

export default Edit

