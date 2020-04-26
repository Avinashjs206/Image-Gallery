import React, { Component } from 'react';

const Avatarlist = (props) => {
    return(<div className = "avatarstyle" style={{background: 'black'}}>
    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>

    </div>);
};

export default Avatarlist;
