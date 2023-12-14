import React from 'react'
import { styled } from 'styled-components'
import Img from '../Img'

const AspectController = ({url,aspect,title='タイトル',subtitle='サブタイトル',content='本文',isActive={title: true,subtitle:true,content: true}})=> {
  switch (aspect) {
    case 'squire':
        return (
            <Square id='koko'>
                <Strings url={url} title={title} subtitle={subtitle} content={content} isActive={isActive}/>
            </Square>
          )

    case 'landscape':
        return (
            <Landscape id='koko'>
                <Strings url={url} title={title} subtitle={subtitle} content={content}/>
            </Landscape>
            )

    case 'vertical':
        return (
            <Vertical id='koko'>
                <Strings url={url} title={title} subtitle={subtitle} content={content}/>
            </Vertical>
            )
  
    default:
        return (
            <Square id='koko'>
                <Strings url={url} title={title} subtitle={subtitle} content={content}/>
            </Square>
          )
  }
}

export default AspectController

const Strings = ({url,title,subtitle,content,isActive={}})=>{
    return(
        <>
            <Img src={url}/>
            {isActive.title && <h1 id='title' >{title}</h1>}
            {isActive.subtitle && <h3 id="subtitle">{subtitle}</h3>}
            {isActive.content && <p id="content">{content}</p>}
        </>
    )
}

const Square = styled.div`
    position: absolute;
    top: 120px;
    overflow: hidden;
    margin: 30px auto;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    left: 50px;
    width: 550px;
    height: 550px;
    background-color: rgba(0, 0, 0, 0.1);
`

const Landscape = styled.div`
    position: absolute;
    top: 160px;
    overflow: hidden;
    margin: 30px auto;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    left: 10px;
    width: 689.08px;
    height: 362.67px;
    background-color: rgba(0, 0, 0, 0.1);
`

const Vertical = styled.div`
    position: absolute;
    top: 100px;
    overflow: hidden;
    margin: 30px auto;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    left: 200px;
    width: 447.21px;
    height: 558.01px;
    background-color: rgba(0, 0, 0, 0.1);
`