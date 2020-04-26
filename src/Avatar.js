import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';

const Avatar = (props) => {
    return (<div>
        <h1>WELCOME TO AVATARLIST</h1>
        <Avatarlist id ='1' name = ' Golu' work = 'Web Developer'/>
        <Avatarlist id ='1' name = ' Avinash' work = 'Web Developer'/>
        <Avatarlist id ='1' name = ' Rohan' work = 'Web Developer'/>
        <Avatarlist id ='1' name = ' Gagan' work = 'Web Developer'/>
        <button>SUBMIT</button>
    </div>)
}

export default Avatar;