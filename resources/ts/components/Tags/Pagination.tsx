import React, { useState } from 'react';
import PostApi from './api/PostApi';
import styled from 'styled-components';

const Pagination =({ paginator,setList,url,post={}})=> {

    const { last_page } = paginator

    const [pageData,setPageData] = useState({current_page: 1})

    const handleOnClick = (page)=>{
        PostApi.post(url,{...post,page: Number(page)}).then((res)=>{
            setPageData({current_page: res.data.current_page})
            setList(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <PageNationWrapper>

    <PagenationButton onClick={()=>{handleOnClick(1)}}>
        最初へ
    </PagenationButton>

    <>...</>

    {1 < Number(pageData.current_page)-1 &&(
        <PagenationButton onClick={()=>{handleOnClick(pageData.current_page ? Number(pageData.current_page)-2 : 1)}}>
            {pageData.current_page ? Number(pageData.current_page)-2 : 1}
        </PagenationButton>  
    )}

    {1 !== pageData.current_page &&(
      <PagenationButton onClick={()=>{handleOnClick(pageData.current_page ? Number(pageData.current_page)-1 : 1)}}>
        {pageData.current_page ? Number(pageData.current_page)-1 : 1}
      </PagenationButton>  
    )}

    {pageData.current_page &&(<CurrentPageButton>{pageData.current_page}</CurrentPageButton>)}

    {last_page !== pageData.current_page && (
       <PagenationButton onClick={()=>{handleOnClick(pageData.current_page ?  Number(pageData.current_page)+1 : 2)}}>
        {pageData.current_page ?  Number(pageData.current_page)+1 : 2}
      </PagenationButton> 
    )}

    {last_page > Number(pageData.current_page)+2 && (
       <PagenationButton onClick={()=>{handleOnClick(pageData.current_page ?  Number(pageData.current_page)+2 : 3)}}>
        {pageData.current_page ?  Number(pageData.current_page)+2 : 3}
      </PagenationButton> 
    )}

    <>...</>

    <PagenationButton onClick={()=>{handleOnClick(last_page)}}>
       最後へ
    </PagenationButton>

    </PageNationWrapper>
  )
}

export default Pagination

const Button = (a)=>{
    return(
        <PagenationButton>
            {a}
        </PagenationButton>
    )
}

const PageNationWrapper = styled.div`
    position: fixed;
    top: 90vh;
    left: 50%;
    transform: translateX(-50%);
`

const PagenationButton = styled.button`
    border: none;
    border: 2px solid #333;
    background-color: #eee;
    color: #333;
    padding: 10px;
    border-radius: 10px;
`

const CurrentPageButton = styled.button`
    border: none;
    border: 2px solid #eee;
    background-color: #333;
    color: #eee;
    padding: 12px;
    border-radius: 10px;
`