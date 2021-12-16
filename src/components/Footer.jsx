import React from 'react';
import styled from 'styled-components';

const Ftb = styled.footer`
    width: 100%;
    padding: 1em 0;
    display: flex;
    bottom: 0;
    position: absolute;
    align-items: center;
    justify-content: center;
    user-select: none;
    color: gray;
    z-index:1000;
`;

function Footer() {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <Ftb>
           {year}{' '}&copy;Drawer
        </Ftb>
    )
}

export default Footer
