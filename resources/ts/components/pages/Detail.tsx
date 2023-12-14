import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import AspectController from '../Tags/controllers/AspectController'
import StyledInput from '../Tags/StyledInput'
import useDetail from '../uses/useDetail'
import Header from '../Tags/Header'
import StyledTextare from '../Tags/StyledTextarea'
import Margin from '../Tags/Margin'

type IData = {
  aspect: string;
  title: string;
  subtitle: string;
  content: string;
}

type UserData = {
  id?: number;
  isLogin: boolean; 
  name: string; 
  mail: string;
}

const Detail = ()=> {
  const { id } = useParams();
  const [ url,setUrl ] = useState<string>('')
  const [ data,setData ] = useState<IData>()
  const [ userData ,setUserData ] = useState<UserData>({isLogin: false, name: '', mail: ''})
  const [ isActive, setIsActive] = useState({
    title: true,
    subtitle: true,
    content: true
  })
  const { handleChangeFile , onClick } = useDetail({url,data,id,setData,setUrl,setUserData,isActive})
  const [ title,setTitle ] = useState<string>('タイトル')
  const [ subtitle, setSubtitle ] = useState<string>('サブタイトル')
  const [ content, setContent ] = useState<string>('本文')
  const handleActive = (value)=>{
    switch (value.target.value) {
      case 'title':
        isActive.title ? setIsActive(state=>{return{ ...state,title: false}}) : setIsActive(state=>{return{ ...state,title: true}})
        break;

      case 'subtitle':
        isActive.subtitle ? setIsActive(state=>{return{ ...state,subtitle: false}}) : setIsActive(state=>{return{ ...state,subtitle: true}})
        break;

      case 'content':
        isActive.content ? setIsActive(state=>{return{ ...state,content: false}}) : setIsActive(state=>{return{ ...state,content: true}})
        break;
    
      default:
        break;
    }
  }

  if(data){
    return (
      <>
        <AspectController url={url} aspect={data.aspect} title={title} subtitle={subtitle} content={content} isActive={isActive}/>
        <EditRapper>
          <Flex style={{height: '50px'}}>
            <button style={{width:'70px',fontSize:"15px",lineHeight:'50px',backgroundColor:"#333",color:"#eee",padding:'0 5px',margin:"2px 0 0 0",outline: "none",border:"none"}} value={'title'} onClick={handleActive}>{isActive.title ? 'いる!' : 'いらん!'}</button>
            <StyledInput defaultValue={'タイトル'} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
          </Flex>
          <Flex>
            <button style={{width:'70px',fontSize:"15px",lineHeight:'50px',backgroundColor:"#333",color:"#eee",padding:'0 5px',margin:"2px 0 0 0",outline: "none",border:"none"}} value={'subtitle'} onClick={handleActive}>{isActive.subtitle ? 'いる!' : 'いらん!'}</button>
            <StyledInput defaultValue={'サブタイトル'} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSubtitle(e.target.value)}}/>
          </Flex>

          <button style={{width:'63px',fontSize:"15px",lineHeight:'50px',backgroundColor:"#333",color:"#eee",padding:'0 5px',margin:"2px 0 0 0",outline: "none",border:"none"}} value={'content'} onClick={handleActive}>{isActive.content ? 'いる!' : 'いらん!'}</button>
          <StyledTextare defaultValue={'本文'} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setContent(e.target.value)}}/>

          <Margin top={'10px'} style={{display:"flex",width:"100%",justifyContent:"center"}}>
            <StyledLabel onClick={()=>{document.getElementById("input-file")?.click()}}>
              写真を選択
              <input type="file" name="ogp-image" id="js-img_resize_input" onChange={handleChangeFile} style={{display:"none"}}/>
            </StyledLabel> 
            <StyledButton onClick={()=>onClick()}>ダウンロード</StyledButton><br/> 
          </Margin>
        </EditRapper>
      </>
    )
  }

}

export default Detail

const Flex = styled.div`
  display: flex;
`

const EditRapper = styled.div`
    position: absolute;
    top: 15vh;
    left: 50vw; 
    width: 40vw;
`
const StyledButton = styled.button`
  width: 150px;
  padding: 10px 0;
  border: none;
  border: 2px solid #333;
  outline: none;
  background: transparent;
  text-align: center;
  font-size:15px;
  margin: 0 10px;

  &:hover{
    transition: .3s all;
    border: 2px solid #eee;
    background-color: #333;
    color: #eee;
  }
`

const StyledLabel = styled.label`
  width: 150px;
  padding: 10px 10px;
  border: none; 
  border: 2px solid #333;
  outline: none;
  background: transparent;
  text-align: center;
  font-size:15px;
  margin: 0 10px;

  &:hover{
    transition: .3s all;
    border: 2px solid #eee;
    background-color: #333;
    color: #eee;
  }
`