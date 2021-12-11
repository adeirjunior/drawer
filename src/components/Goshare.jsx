import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Share } from '../assets/svg/goShare.svg'

const ShareBtn = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
    z-index:-1;

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
        }
        span{
            background-color: #EE4545;
            display: inline-block;
            padding: 2em 1em;
            border-top-left-radius: 1em;
            border-bottom-left-radius: 1em;

            svg{
                width: 40px;
                height: auto;
                cursor: pointer;
            }
        }
    }
`;



function Goshare() {
    return (
        <ShareBtn>
            <div>

            </div>
            <span>
                <Link to='/share'><Share /></Link>
            </span>
        </ShareBtn>
    )
}

export default Goshare;
