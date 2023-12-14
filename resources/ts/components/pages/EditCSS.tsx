import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import Header from '../Tags/Header';
import AspectController from '../Tags/controllers/AspectController';
import FormInput from '../Tags/FormInput';
import FormTextarea from '../Tags/FormTextarea';
import Margin from '../Tags/Margin';
import useEditCSS from '../uses/useCreate';
import StyledSubmit from '../Tags/StyledSubmit';
import StyledButton from '../Tags/StyledButton';

type UserData = {
    id?: number;
    isLogin: boolean; 
    name: string; 
    mail: string;
}

interface ICssText {
    name: string
    value: any
}

const EditCSS = ({id={},data={name:'',title:'',subtitle:'',content:''}})=> {
    const [ userData ,setUserData ] = useState<UserData>({isLogin: false, name: '', mail: ''});
    const { control, handleSubmit, watch } = useForm<ICssText>()
    const [ url, setUrl ] = useState<string>('')
    const [ aspect, setAcpect ] = useState<string>('squire')
    const [ textMode, setTextMode ] = useState<string>('title')
    const { handleOnClick,handleTextMode,handleChangeFile,onSubmit} = useEditCSS({setUserData,watch,textMode,aspect,setAcpect,setTextMode,setUrl,id,data})


    return (
        <>
            <ButtonWrapper>
                <StyledButton selected={aspect === 'squire'} value={'squire'} onClick={handleOnClick}>正方形</StyledButton>
                <StyledButton selected={aspect === 'landscape'} value={'landscape'} onClick={handleOnClick}>縦長</StyledButton>
                <StyledButton selected={aspect === 'vertical'} value={'vertical'} onClick={handleOnClick}>横長</StyledButton>
            </ButtonWrapper>
    
            <AspectController url={url} aspect={aspect}/>
    
            <EditRapper>
                <StyledButton selected={textMode === 'title'} value={'title'} onClick={handleTextMode}>タイトル</StyledButton>
                <StyledButton selected={textMode === 'subtitle'} value={'subtitle'} onClick={handleTextMode}>サブタイトル</StyledButton>
                <StyledButton selected={textMode === 'content'} value={'content'} onClick={handleTextMode}>コンテンツ</StyledButton>
    
                <Margin top='3vh'>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width:"30vw",margin: "0 auto",textAlign:"center"}}>
                        {textMode === 'title' && <FormTextarea title={'タイトル'} name={'title'} control={control} defaultValue={data?.title}/>}
                        {textMode === 'subtitle' && <FormTextarea title={'サブタイトル'} name={'subtitle'} control={control} defaultValue={data?.subtitle}/>}
                        {textMode === 'content' && <FormTextarea title={'コンテンツ'} name={'content'} control={control} defaultValue={data?.content}/>}
                        <FormInput title={'名前'} name={'name'} control={control} defaultValue={data?.name} rules={{ required: '入力してください' }}/>
                        <StyledSubmit type="submit" />
                    </form>
                </Margin>
    
                <Margin top={'50px'}>
                    <label style={{marginTop: "40px"}}>
                        <input type="file" name="ogp-image" id="js-img_resize_input" onChange={handleChangeFile}/>ファイルを選択
                    </label>
                </Margin>
            </EditRapper>
        </>
      )
}

export default EditCSS

const ButtonWrapper = styled.div`
    position: absolute;
    top: 10vh;
    left: 5px;
`
    
const EditRapper = styled.div`
    position: absolute; 
    top: 10vh;
    left: 60vw;
`