import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';
import home from './home';


export default () => {
    // const [navItems, setNavItems] = useState(
    //     [
    //         {
    //             id: 1, name: "who", dropdownLinks: [{ id: 1, name: "TEAM BIOS", link: "bios" }]
    //         },
    //         {
    //             id: 2, name: "what", isDisplayed: false, dropdownLinks: [{ id: 1, name: "SERVICES" }, { id: 2, name: "EVENTS" }]
    //         },
    //         {
    //             id: 3, name: "know", isDisplayed: false, dropdownLinks: [{ id: 1, name: "PATIENT INFO" }, { id: 2, name: "FAQS" }, { id: 3, name: "CONDITIONS TREATED" }, { id: 4, name: "RESOURCES" }]
    //         },
    //         {
    //             id: 4, name: "connect", isDisplayed: false, dropdownLinks: [{ id: 1, name: "DIRECTIONS" }, { id: 2, name: "REQUIEST AN APPOINTMENT" }, { id: 3, name: "BLOG" }]
    //         },
    //         {
    //             id: 5, name: "buzz", isDisplayed: false, dropdownLinks: [{ id: 1, name: "REVIEWS" }, { id: 2, name: "SUBMIT" }]
    //         }
    //     ]
    // );



    // const dropdownDisplay = (id, shouldDisplay) => {
    //     const items = navItems.map(item => {
    //         if (item.id === id) {
    //             item.isDisplayed = shouldDisplay;
    //         }
    //         return item;
    //     });
    //     setNavItems(items);
    // };

    return (
        <div id="navContainer">

            <ul id="nav">

                {/* <div id="wrapper">
                {navItems.map(item =>
                    <li key={item.id}
                        onMouseEnter={() => dropdownDisplay(item.id, true)}
                        onMouseLeave={() => dropdownDisplay(item.id, false)}
                    >
                        <a>{item.name}</a>
                        {item.isDisplayed && <Dropdown
                            links={item.dropdownLinks}
                        />}
                    </li>)
                }
                {/* </div> */}

                <div id="wrapper">
                    <NavLink to='/services' key='1'>services</NavLink>
                    <NavLink to='/therapists' key='2'>therapists</NavLink>
                    <NavLink to='/contact' key='3'>contact</NavLink>
                </div>
            </ul>

        </div >
    );
}