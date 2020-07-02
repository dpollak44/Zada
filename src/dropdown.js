import React from 'react';
import './dropdown.css';
import { NavLink } from 'react-router-dom';


export default (props) => {
    return (
        <ul className="theDropdown">
            {props.links.map(link => <li style={{ margin: '0', textAlign: 'left !important' }} key={link.id}><NavLink to={`/${link.link}`} style={{ margin: '0', textAlign: 'left !important' }}>{link.name}</NavLink></li>)}
        </ul>
    );
}