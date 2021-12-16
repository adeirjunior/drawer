import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Share } from '../assets/svg/goShare.svg'

const ShareBtn = styled.div`
    display: flex;
    position: absolute;
    top: 47%;
    right: 0;
    z-index: 10;

    &:hover span{
        width:40px;
    }
    &:hover span svg path{
        fill: #fff;
    }

    &:hover div::before{
        border-right: solid 0 #EE4545;
    }

        div::before{
            content: '';
            display: inline-block;
            position: relative;
            border: solid 15px;
            top: 50%;
            transform: translateY(-50%);
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
            border-right-color: #EE4545;
            width: 0;
            height: 0;
            transition: border .3s;
        }
        span{
            background-color: #EE4545;
            display: inline-block;
            padding: 2em 1em;
            border-top-left-radius: 1em;
            border-bottom-left-radius: 1em;
            width: 0;
            overflow: hidden;
            transition: width .3s ease;

            svg{
                width: 40px;
                height: auto;
                cursor: pointer;
                
                path{
                    fill: transparent;
                    transition: fill .2s ease;
                }
            }
        }
    }
`;



function Goshare() {
    return (
        <ShareBtn>
            <div></div>
            <Link to='/'>
                <span>
                    <Share />
                </span>
            </Link>
        </ShareBtn>
    )
}

export default Goshare;
