import React, { useState } from "react"
import { styled } from "styled-components"
import TypeController from "../Tags/controllers/TypeController"
import useTop from "../uses/useTop"
import Pagination from "../Tags/Pagination"

type UserData = {
    isLogin: boolean; 
    name: string; 
    mail: string;
}

const Top  = () => {
    const [ data ,setData ] = useState<UserData>({isLogin: false, name: '', mail: ''})
    const [ list ,setList ] = useState([null])
    const [ paginator,setPaginater ] = useState({last_page: 1})

    useTop({setData,setList,data,setPaginater,paginator})

    if(list && paginator){
        return (
            <>
                <TopWrapper>
                    {list.map((data: any) => {
                        if(data && data.path){
                           return <TypeController data={data} top/>
                        }
                    })}
                </TopWrapper>

                {paginator!.last_page > 1 && (<Pagination paginator={paginator} setList={setList} url={'/getList'}/>)}
            </>
        )
    }
}

export default Top;

const TopWrapper = styled.div`
    margin-top: 12vh;
    width: 90vw;
    margin-left: 5vw; 
    column-count: 3; 
`