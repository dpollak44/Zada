import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './services.css'

import 'semantic-ui-css/semantic.min.css';

import { Transition, Button } from 'semantic-ui-react';


export default ({ infoSelectors, onDetailsDivDisplay, onSelectService }) => {
    // const [infoSelectors, setInfoSelectors] = useState(
    //     [
    //         {
    //             id: 1, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'physical therapy', link: 'pt'
    //         },
    //         {
    //             id: 2, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'nutrition', link: 'nutrition'
    //         },
    //         {
    //             id: 3, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'children'
    //         },
    //         {
    //             id: 4, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'adults'
    //         },
    //         {
    //             id: 5, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'seniors'
    //         },
    //         {
    //             id: 6, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'horses'
    //         },
    //         {
    //             id: 7, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'dog'
    //         },
    //         {
    //             id: 8, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'swimming'
    //         },
    //         {
    //             id: 9, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'cat'
    //         }
    //     ]
    // );

    // const detailsDivDisplay = (id, shouldDisplay) => {
    //     const items = infoSelectors.map(item => {
    //         if (item.id === id) {
    //             item.detailsDivDisplayed = shouldDisplay;
    //         }
    //         return item;
    //     });
    //     setInfoSelectors(items);
    // };


    return (
        <div id="services">
            <h2>SERVICES</h2>
            <div id="photoGrid" className="container">
                {infoSelectors.map(selector => <div className="selectorDiv"
                    style={{ backgroundImage: `url(${selector.url})` }}
                    key={selector.id}
                    onMouseEnter={() => onDetailsDivDisplay(selector.id, true)}
                    onMouseLeave={() => onDetailsDivDisplay(selector.id, false)}
                >





                    <Transition visible={selector.detailsDivDisplayed} animation='slide up' duration={500}>
                        <div className="details">

                            <h5>{selector.name}</h5>
                            {/* <Link to={`/${selector.link}`}> <Button secondary>Details</Button></Link> */}
                            <Link to="/service"> <Button onClick={() => onSelectService(selector.id)} secondary>Details</Button></Link>

                        </div>

                    </Transition>



                </div>)}
            </div>
        </div>
    );
}

