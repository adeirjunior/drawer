import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Load } from '../assets/svg/loadSvg.svg';
import Anime from 'react-anime';

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: ${()=> ready === true ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: : hidden;

    svg{
        height: 100px;
        width: auto;
    }
`;
let ready= window.onload;

function Loading() {
    
    return (
        <Loader>
            <Anime 
                ease='easeInOut'
                loop={true}
                direction='alternate'
                duration={1000}
                delay={(el, index)=> index * 40}
                translateY={[0,'1rem']}
            >
                <Load />
            </Anime>
        </Loader>
    )
}

export default Loading
