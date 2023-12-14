import React from 'react'
import styled, { css } from 'styled-components'

type MarginProps = {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string
}

const Margin = styled.div<MarginProps>`
    ${({ top }) => top && css `margin-top: ${top}` };
    ${({ right }) => top && css `margin-right: ${right}` };
    ${({ bottom }) => top && css `margin-bottom: ${bottom}` };
    ${({ left }) => top && css `margin-left: ${left}` };
`

export default Margin
