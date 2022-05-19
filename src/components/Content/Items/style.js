import styled from 'styled-components'
import { colors, textColor, textColorReverse } from '../../Theming/Theme'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
`

export const Card = styled.div`
    background-image: linear-gradient(to top, black 0%, transparent 100%),
        url(${(props) => props.image});
    min-height: 460px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    object-fit: cover;
    padding: 15px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:hover {
        button {
            color: ${textColor};
        }
    }
`

export const Title = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 10px;
`

export const Info = styled.div`
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
`
export const Details = styled.div`
    color: rgba(249, 249, 249, 0.67);
    font-weight: 700;
`

export const WatchButton = styled.button`
    float: right;
    border: none;
    background-color: ${colors.accent};
    color: ${textColorReverse};
    padding: 10px 20px;
    border-radius: 5px;

    font-weight: 700;
`
