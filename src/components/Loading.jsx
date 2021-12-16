import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Load } from '../assets/svg/loadSvg.svg';
import Anime from 'react-anime';

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: ${(props)=> props.finished === true ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: : hidden;
    z-index: 100;

    svg{
        height: 100px;
        width: auto;
    }
`;

function Loading() {
    const [ready, setReady] = useState(false);

    window.onload = () => {setTimeout(()=>setReady(true),1500)}
    
    return (
        <Loader finished={ready}>
            <Anime 
                ease='easeInOut'
                loop={true}
                direction='alternate'
                duration={1000}
                delay={(el, index)=> index * 20}
                translateY={[0,'1rem']}
            >
                <Load />
            </Anime>
        </Loader>
    )
}

export default Loading
