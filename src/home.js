import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import 'semantic-ui-css/semantic.min.css';

import { Button } from 'semantic-ui-react';


export default () => {
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
        <>

            <div id="content1">
                <h2>ZADAREHAB IS AN INNOVATIVE PHYSICAL THERAPY AND WELLNESS CLINIC IN LAKEWOOD NJ</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus fugit molestiae, neque nihil vel,
                quod,
                incidunt ex repudiandae delectus voluptates dignissimos obcaecati impedit vitae sit maiores iure
                exercitationem
            unde.</h3>
            </div>
            <div id="content2">
                <div className="imageSpread"></div>
                <div className="imageSpread"></div>
                <div className="imageSpread"></div>

            </div>

            <div id="content3">
                <div>
                    <h2>HOW IT<br></br> WORKS</h2>
                </div>
                <div id="catchyPhraseContainer">
                    <div className="catchyPhrases">
                        <h4>Explore</h4>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus fugit molestiae, neque nihil vel,
                        quod,
                        incidunt ex repudiandae delectus voluptates dignissimos obcaecati impedit vitae sit maiores iure
                exercitationem</h6>
                    </div>
                    <div className="catchyPhrases">
                        <h4>Create</h4>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus fugit molestiae, neque nihil vel,
                        quod,
                        incidunt ex repudiandae delectus voluptates dignissimos obcaecati impedit vitae sit maiores iure
                exercitationem</h6>
                    </div>
                    <div className="catchyPhrases">
                        <h4>Design</h4>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus fugit molestiae, neque nihil vel,
                        quod,
                        incidunt ex repudiandae delectus voluptates dignissimos obcaecati impedit vitae sit maiores iure
                exercitationem</h6>
                    </div>
                </div>
            </div>






            <div id="appointment">
                <p>START YOUR PATH TO WELLNESS</p>
                <Button primary>REQUEST AN APPOINTMENT</Button>

            </div>

        </>
    );
}