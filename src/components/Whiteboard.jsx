import React from 'react';
import CanvasDraw from 'react-canvas-draw';

function Whiteboard() {
    return (
        <CanvasDraw style={{cursor:'none',width:'100%', height:'85vh'}} hideGrid />
    )
}

export default Whiteboard;
