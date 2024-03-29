import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { colors, textColor } from '../../../Theming/Theme'

export const FormArea = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    input,
    textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid ${colors.accent};
        margin-right: 30px;
        height: 28px;
        vertical-align: middle;

        &:focus,
        &:active {
            outline: none;
        }
    }
`

export const LabelInput = styled.label`
    ${down('lg')} {
        margin-bottom: 10px;
    }
`

export const NameInput = styled.input`
    color: ${textColor};
    max-width: 150px;
    margin-left: 10px;
`
export const TextInput = styled.textarea`
    color: ${textColor};

    max-width: 350px;
    resize: none;
    margin-left: 10px;
`
