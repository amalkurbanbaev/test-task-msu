import React, { Children } from 'react'
import styled from 'styled-components'
import { colors, textColor, textColorReverse } from './Theme'

// UI kit

export const ButtonPrimary = styled.button`
    float: ${(props) => props.float};
    border: none;
    background-color: ${colors.accent};
    color: ${textColorReverse};
    padding: 10px 20px;
    border-radius: 5px;

    pointer-events: ${(props) => props.disabled && 'none'};
    opacity: ${(props) => props.disabled && '.65'};;
}
    
    font-weight: 700;
    &:hover {
        color: ${textColor};
    }
`

export const Button = ({ text, float, disabled }) => {
    return (
        <ButtonPrimary disabled={disabled} float={float}>
            {text}
        </ButtonPrimary>
    )
}
