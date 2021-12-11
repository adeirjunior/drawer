import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavB = styled.div`
    width: 100%;
    padding: .75em 0;
    color: white;
    text-align: center;
    font-size: 20pt;
    background-color: #EE4545;
    user-select: none;

    a{
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

function Navigator() {
    return (
        <NavB>
           <Link to='/'>Drawer</Link>
        </NavB>
    )
}

export default Navigator
