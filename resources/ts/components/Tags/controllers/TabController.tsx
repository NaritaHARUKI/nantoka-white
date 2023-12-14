import React, { useState } from 'react'
import styled from 'styled-components';
import StyledButton from '../StyledButton';

const TabController = ({content})=> {
    const [tab, setTab] = useState<number>(0);
    const handleOnClick = (e,onClick,index)=>{
        onClick(e)
        setTab(index)
    }

    return (
    <div>
        <TabWapper>
            {content.map((c,index)=>(
                tab === index 
                ?
                <StyledButton width='250px'  selected onClick={(e)=>{handleOnClick(e,c.onClick,index)}} id={c.id}>{c.name}</StyledButton>
                :
                <StyledButton width='250px' onClick={(e)=>{handleOnClick(e,c.onClick,index)}} id={c.id}>{c.name}</StyledButton>
            ))}
        </TabWapper>
    </div>
    )
}

export default TabController

const TabWapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: 15px;
`


