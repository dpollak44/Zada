import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import 'semantic-ui-css/semantic.min.css';

import { Button, Icon } from 'semantic-ui-react';


export default (props) => {

    return (
        <div className="footer">
            <div id="stuff">
                <div>
                    <ul id="infoLinks">
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="contactUs">CONTACT US</NavLink></li>
                        <li><NavLink to="/blog">BLOG</NavLink></li>
                        <li><NavLink to="privacyPolicy">PRIVACY POLICY &amp;<br></br> TERMS OF USE</NavLink></li>
                    </ul>
                </div>
                <div id="writeReview">
                    <h2>HOW DID WE DO?</h2>
                    <Button color='blue' size='big' >WRITE A REVIEW</Button>
                </div>
                <div>
                    <h2>REVIEWS</h2>
                    <Icon color='yellow' name='star' size='big' />
                    <Icon color='yellow' name='star' size='big' />
                    <Icon color='yellow' name='star' size='big' />
                    <Icon color='yellow' name='star' size='big' />
                    <Icon color='yellow' name='star' size='big' />
                    <h3>5.0 Avg. satisfaction of 1 reviews</h3>
                </div>
            </div>
            <div id="footerBottom">
                <Icon color='red' name='instagram' size='huge' />
                <Icon color='red' name='facebook' size='huge' />
                <Icon color='red' name='twitter' size='huge' />
                <Icon color='red' name='linkedin' size='huge' />
                <Icon color='red' name='google plus g' size='huge' />
                <h2>zadarehab. all rights reserved 2020</h2>
            </div>
        </div>
    );
}




