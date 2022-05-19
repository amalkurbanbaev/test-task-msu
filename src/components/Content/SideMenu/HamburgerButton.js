import React, { useContext } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

const MenuButton = styled.button`
    display: block;
    transform-origin: 16px 11px;
    float: left;
    outline: 0;
    border: 0;
    background: none;

    ${up('lg')} {
        display: none;
    }

    span {
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &.active {
        span:nth-of-type(1) {
            width: 30px;
            transform: rotate(45deg) translate(7px, 7px);
        }

        span:nth-of-type(2) {
            opacity: 0;
            pointer-events: none;
        }

        span:nth-of-type(3) {
            transform: rotate(-45deg) translate(5px, -5px);
            width: 30px;
        }
    }
`

const Bar = styled.span`
    display: block;
    width: 30px;
    height: 3px;
    margin-bottom: 5px;
    background-color: #fff;
`

const HamburgerButton = React.forwardRef((props, buttRef) => {
    const clickHandler = () => {
        props.toggleMenuMode()
    }

    return (
        <MenuButton
            ref={buttRef}
            className={
                props.isMenuOpen
                    ? 'active d-block d-lg-none'
                    : 'd-block d-lg-none'
            }
            onClick={clickHandler}
        >
            <Bar />
            <Bar />
            <Bar />
        </MenuButton>
    )
})

export default HamburgerButton
