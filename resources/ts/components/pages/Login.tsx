import React, { useEffect, useState } from 'react'
import { useForm, useController } from 'react-hook-form';
import FormInput from '../Tags/FormInput'
import PostApi from '../Tags/api/PostApi';
import ErrMessage from '../Tags/ErrMessage';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom';
import store from '../redux/store/store';
import Header from "../Tags/Header";
import Actions from '../redux/Actions';
import StyledInput from '../Tags/StyledInput';
import StyledSubmit from '../Tags/StyledSubmit';
import Margin from "../Tags/Margin";

export default function Login() {

  const { control, handleSubmit } = useForm()
  const [ isLoginErr,setIsLoginErr ] = useState(false)
  {/*// @ts-ignore */}
  const userDataInit = useSelector((state) => state.cssData)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onSubmit = (data) => {
    setIsLoginErr(false)
    PostApi.post('/login',{data}).then((res)=>{
        Actions.userData(res.data,dispatch)
        navigate('/')
    }).catch((err)=>{
        setIsLoginErr(true)
    })
  }

  return (
    <div>
        Login
        {isLoginErr && <ErrMessage>メールアドレス、またはパスワードが間違っています！</ErrMessage>}
        <Margin top='30vh'>
          <form onSubmit={handleSubmit(onSubmit)}  style={{ width:"30vw",margin: "0 auto",textAlign:"center"}}>
            <FormInput title={'メールアドレス'} name={'mail'} control={control} rules={{ required: '入力してください' }}/>
            <FormInput title={'パスワード'} name={'password'} control={control} rules={{ required: '入力してください' }}/>
            <StyledSubmit type="submit" />
          </form>
        </Margin>
    </div>
  )
}


