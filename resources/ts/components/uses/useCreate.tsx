import { useEffect } from "react"
import store from "../redux/store/store"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import onFileInputChange from "../Tags/onFileInputChange"
import PostApi from "../Tags/api/PostApi"
import getImage from "../Tags/getImage"
import Actions from "../redux/Actions"


const useEditCSS = ({setUserData,watch,textMode,aspect,setAcpect,setTextMode,setUrl,data={name:'',title: '',subtitle: '',content: ''},id={}})=>{

    {/*// @ts-ignore */}
    const userDataInit = useSelector((state) => state.cssData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        store.getState()
        setUserData(store.getState().user)
    },[])

    //がめんが来たらしょきか
    useEffect(()=>{
        Actions.cssData({title: '',subtitle: '',content: ''},dispatch)
        const css = store.getState().css
        effectCss(css)
    },[window.location])

    useEffect(()=>{
        watch((value) => {
            Actions.cssData({...value,textMode},dispatch)
            const css = store.getState().css
            effectCss(css)
        })
      },[watch])
    
    useEffect(()=>{
        const css = store.getState().css
        effectCss(css)
    },[ aspect,textMode])

    //edit用
    useEffect(()=>{
        //createだったら弾く
        if(data.name === '',data.title ==='',data.subtitle === '',data.content === '') return
        {/*// @ts-ignore */}
        const css = {title: data.title, subtitle: data.subtitle, content: data.content}
        Actions.cssData(css,dispatch)
        effectCss(css)
        console.log('llll')
    },[data])

    const effectCss = (cssData)=>{
        const list = ['title','subtitle','content']
        for (let index = 0; index < list.length; index++) {
            const target = document.getElementById(list[index])
            if(!target) return
            {/*// @ts-ignore */}
            target.style.cssText = cssData[list[index]]
        }
    }

    const handleOnClick = (e)=>{
        const css = store.getState().css
        setAcpect(e.target.value)
        effectCss(css)
    }

    const handleTextMode = (e)=>{
        setTextMode(e.target.value)
    }
    
    const handleChangeFile = (e)=>{
        onFileInputChange(e,setUrl)
    }

    const onSubmit = () => {
        const css = store.getState().css
        const userId = store.getState().user.id
        console.log(userId)
        
        PostApi.post('/create', {...css,userId,textMode,aspect,id}).then((res)=>{
            console.log(res)
            getImage(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
      }

    return { handleOnClick,handleTextMode,handleChangeFile,onSubmit}
}

export default useEditCSS