import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import store from '../redux/store/store'

const Header =()=> {

    const [ userData, setUserData] = useState({isLogin: false})

    const location = useLocation()
    useEffect(() => {
        setUserData(store.getState().user)
    }, [location.pathname]); 

  return (
    <HeaderWrapper>
        <Inner>
            <Logo to='/'>NANTOKA-WHITE</Logo>
            <LinkWrapper>
            <LinkLi><StyledLink to="/register">ユーザーサクセイ</StyledLink></LinkLi>
            {!userData.isLogin && <LinkLi><StyledLink to="/login">ログイン</StyledLink></LinkLi>}
            {userData.isLogin && <LinkLi><StyledLink to="/logout">ログアウト</StyledLink></LinkLi>}
            {userData.isLogin && <LinkLi><StyledLink to="/create">作成</StyledLink></LinkLi>}
            {userData.isLogin && <LinkLi><StyledLink to="/profile">プロフィール</StyledLink></LinkLi>}
            </LinkWrapper>
        </Inner>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 20px 40px;
    color: #eee;
    background: #333;
    box-sizing: border-box;
`

const Inner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`

const Logo = styled(Link)`
    position: relative;
    margin: 0;
    padding: 0;
    text-decoration: none;
    letter-spacing: 8px;
    border: #333;
    color: black;
    background-color: white;
    padding: 5px 10px;

    &:hover{
        opacity: .5;
        background-position: 100% 0;
        transition: .3s all;
    }
`

const LinkWrapper = styled.ul`
    margin: 0 0 0 auto;
    padding: 0;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    list-style: none;
`

const LinkLi = styled.li`
    margin: 5px 0 5px 40px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #eee;

    &:hover{
        border: #333;
        color: #333;
        background-color: #eee;
        padding: 10px;
        transition: .3s all;
    }
`
