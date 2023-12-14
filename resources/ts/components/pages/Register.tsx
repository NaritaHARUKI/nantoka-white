import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import PostApi from '../Tags/api/PostApi';
import FormInput from '../Tags/FormInput';
import ErrMessage from '../Tags/ErrMessage';
import store from '../redux/store/store';
import { Link } from 'react-router-dom';
import Header from '../Tags/Header';
import StyledSubmit from '../Tags/StyledSubmit';
import Margin from '../Tags/Margin';

const mailRule = {
    required: '入力してください',
    pattern: { value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/, message: '正しいメールアドレスを入力してください。' }
}

const passwordRule = {
    required: '入力してください',
    minLength: { value: 5, message: `6文字以上で入力してください。` },
    pattern: { value: /^[a-zA-Z0-9]+$/, message: '半角英数字で入力してください。' }
}

export default function Register() {
  const [ mismatch, setMismatch ] = useState(false)
  const [ apiErrorMessage, setApiErrorMessage ] = useState(false)
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword){
        return setMismatch(true)
    }
    setMismatch(false)
    PostApi.post('/createUser',{data}).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        error.response.data && setApiErrorMessage(error.response.data)
    })
  }

  return (
    <div>
        {apiErrorMessage && <ErrMessage>{apiErrorMessage}</ErrMessage>}<br/>
        <Link to="/login">ログイン</Link>

        <Margin top='25vh'>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width:"30vw",margin: "0 auto",textAlign:"center"}}>
                <FormInput title={'メールアドレス'} name={'mail'} control={control}  rules={ mailRule }/>
                <FormInput title={'ユーザー名'} name={'name'} control={control}  rules={{ required: '入力してください' }}/>
                <FormInput title={'パスワード'} name={'password'} control={control} rules={ passwordRule }/>
                {mismatch && <ErrMessage>パスワードが確認パスワードと異なります！</ErrMessage>}
                <FormInput title={'確認パスワード'} name={'confirmPassword'} control={control} rules={ passwordRule }/>
                <StyledSubmit type="submit" />
            </form>
        </Margin>
    </div>
  )
  
}


