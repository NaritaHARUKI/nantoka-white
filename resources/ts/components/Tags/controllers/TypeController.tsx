import React from 'react'
import { styled } from "styled-components"
import useTypeController from '../../uses/useTypeController'

type IData = {
    id: number;
}

const TypeController = ({data,top=false,type={}}) =>{

    const { GoodButton, handleOnClick } = useTypeController({data,top,type})

    switch (data.aspect) {
        case 'squire':
            return(
                <WrapperDiv>
                    <div onClick={handleOnClick}>
                        <Squire src={data.path} alt="" />
                        <WrapperP>{data.name}</WrapperP>
                    </div>
                    <GoodButton/>
                </WrapperDiv>
            )
        
        case 'landscape':
            return(
                <WrapperDiv onClick={handleOnClick}>
                    <div onClick={handleOnClick}>
                        <Landscape src={data.path} alt=""/>
                        <WrapperP>{data.name}</WrapperP>
                    </div>
                    <GoodButton/>
                </WrapperDiv>
            )

        case 'vertical':
            return(
                <WrapperDiv>
                    <div onClick={handleOnClick}>
                        <Vertical src={data.path} alt=""/>
                        <WrapperP>{data.name}</WrapperP>
                    </div>
                    <GoodButton/>
                </WrapperDiv>
                
            )
    
        default:
            return(
                <WrapperDiv>
                    <div onClick={handleOnClick}>
                        <Squire src={data.path} alt="" />
                        <WrapperP>{data.name}</WrapperP>
                    </div>
                    <GoodButton/>
                </WrapperDiv>
            )
    }


}

export default TypeController


const Squire = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: block;
`

const Landscape = styled.img`
    width: 300px;
    height: 200px;
    margin: 0 auto;
    display: block;
`

const Vertical = styled.img`
    margin: 0 auto;
    width: 200px;
    height: 300px;
    margin: 0 auto;
    display: block;
`

const WrapperDiv = styled.div`
    break-inside: avoid;
    padding: 10px;
    margin-bottom: 30px;
    border: solid black;
    background: #eee;
`

const WrapperP = styled.p`
    text-align: center;
`