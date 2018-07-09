import React, { Component } from 'react';

const Squeare = ({id, color, click}) => {

const style = {backgroundColor: '#000000' }

    return ( 
        <button 
        value ={color}
        id = {id}
        className="square" 
        onClick={click} 
        style={style}>
        </button>
    )
}


export default Squeare;