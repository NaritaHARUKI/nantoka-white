import { useEffect } from "react"
import PostApi from "../Tags/api/PostApi"
import onFileInputChange from "../Tags/onFileInputChange"
import html2canvas from "html2canvas"
import store from "../redux/store/store"

const useDetail = ({url,data,id,setData,setUrl,setUserData,isActive})=>{

    useEffect(()=>{
        PostApi.post('/getDetail', {id: id}).then((res)=>{
          setData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
      },[])

    useEffect(()=>{
        setUserData(store.getState().user)
    },[])

    useEffect(()=>{
        const koko = document.getElementById('koko')
        if(koko) koko.style.backgroundImage = url
    },[url])

    useEffect(()=>{
      console.log(data)
        if(data){
          document.getElementById('title')!.style.cssText = data.title
          document.getElementById('subtitle')!.style.cssText = data.subtitle
          document.getElementById('content')!.style.cssText = data.content + 'white-Space: pre-line;'
        }
      },[data])

    useEffect(()=>{
      if(document.getElementById('title')){
        document.getElementById('title')!.style.cssText = data.title
      }
      if(document.getElementById('subtitle')){
        document.getElementById('subtitle')!.style.cssText = data.subtitle
      }
      if(document.getElementById('content')){
        document.getElementById('content')!.style.cssText = data.content
      }
    },[isActive])

    const handleChangeFile = (e)=>{
        onFileInputChange(e,setUrl)
    }

    const onClick = ()=>{
        html2canvas(document.getElementById('koko')!).then(canvas => { 
            let a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = 'download.png'
            a.click();
        })
    }

    return { handleChangeFile, onClick }
}

export default useDetail