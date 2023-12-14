import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TypeController from '../Tags/controllers/TypeController'
import useProfile from '../uses/useProfile'
import Header from '../Tags/Header'
import TabController from '../Tags/controllers/TabController'
import FormInput from '../Tags/FormInput'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import store from '../redux/store/store'
import PostApi from '../Tags/api/PostApi'
import Actions from '../redux/Actions'
import Pagination from '../Tags/Pagination'
import StyledSubmit from '../Tags/StyledSubmit'
import Margin from '../Tags/Margin'

type IData = {
    id: number;
    name: string;
    mail: string;
}

const Profile = ()=> {
    const [ data,setData ] = useState<IData>()
    const [ createList,setCreateList] = useState<Array<IData>>([])
    const [ goodList,setGoodList] = useState<Array<IData>>([])
    const [ type,setType ] = useState<string>('create')
    const [ isEditMode,setIsEditMode] = useState<boolean>(false)
    const { control, handleSubmit, watch } = useForm()
    const dispatch = useDispatch()

    const { handleOnClick, handleEdit, paginater} = useProfile({setCreateList,setData,type,setGoodList,setType,isEditMode,setIsEditMode})
    const createTab = {
        name:'作ったやつ',
        id: 'create',
        onClick: handleOnClick
    }
    const goodTab = {
        name:'いいねしたやつ',
        id: 'good',
        onClick: handleOnClick
    }

    const ProfileEdit = ({isEditMode,defaultValue,name})=>{
        if(isEditMode){
            return(
                <>
                    <FormInput title={''} name={name} control={control} defaultValue={defaultValue} fontSize={'90%'}/>
                    <EditImg src={'/images/edit.png'} alt="" onClick={handleEdit}/>
                </>
            )
        }

        if(!isEditMode){
            return(
                <>
                    {defaultValue}
                    <EditImg src={'/images/edit.png'} alt="" onClick={handleEdit}/>
                </>
            )
        }
    }


    useEffect(()=>{
        watch((value) => {
            Actions.profileData({...value},dispatch)
        })
    },[watch])

    const onSubmit = ()=>{
        const editedData = store.getState().user.edited
        const id = store.getState().user.id
        PostApi.post('/editProfile', {...editedData,id}).then((res)=>{
            setIsEditMode(false)
            Actions.editedUserdata(res.data,dispatch)
            const userData = store.getState().user
            setData(userData)
        }).catch((err)=>{
            console.log(err)
        })
    }


  if(data){
    return (
        <>
            <div style={{marginTop: "100px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper>
                        <ProfileEdit isEditMode={isEditMode} name={'username'} defaultValue={data.name}/>
                    </InputWrapper>
                    <InputWrapper>
                        <ProfileEdit isEditMode={isEditMode} name={'usermail'} defaultValue={data.mail}/>
                    </InputWrapper>

                    {isEditMode && (
                        <Margin left='20px'>
                            <StyledSubmit type='submit' />
                        </Margin>
                    )}
                </form>

            <TabController content={[createTab,goodTab]}/>

            {type === 'create' && createList.length > 0 && (
                <Wrap>              
                    {createList.map((data: any) => {
                        if(data && data.path){
                           return <TypeController data={data} type={type}/>
                        }
                    })}

                    {paginater!.last_page > 1 && <Pagination paginator={paginater} setList={setCreateList} url={'/getCreateList'} post={{id: data.id}}/>}
                </Wrap>
            )}

            {type === 'good' && goodList.length > 0 && (
                <Wrap>
                    {goodList.map((data: any) => {
                        if(data && data.path){
                           return <TypeController data={data} type={type}/>
                        }
                    })}

                    {paginater!.last_page > 1 && <Pagination paginator={paginater} setList={setGoodList} url={'/getGoodList'} post={{id: data.id}}/>}
                </Wrap>
            )}
        </div>
        </>
      )
  }
}

export default Profile

const InputWrapper = styled.div`
    margin-left: 20px;
    font-size: 26px;
    fontWeight: bold;
    display: flex;
    align-items: center;
`

const Wrap = styled.div`
    margin-top: 20px;
    margin-left: 15px;
    column-count: 3; 
    width: 70vw;
`

const EditImg = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-left: 10px;
`