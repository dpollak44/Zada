import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { CSSTransitionGroup } from 'react-transition-group'


export default () => {
    const [infoSelectors, setInfoSelectors] = useState(
        [
            {
                id: 1, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'physical therapy', link: 'pt'
            },
            {
                id: 2, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'nutrition', link: 'nutrition'
            },
            {
                id: 3, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'children'
            },
            {
                id: 4, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'adults'
            },
            {
                id: 5, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'seniors'
            },
            {
                id: 6, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'horses'
            },
            {
                id: 7, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'dog'
            },
            {
                id: 8, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'swimming'
            },
            {
                id: 9, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'cat'
            }
        ]
    );

    const detailsDivDisplay = (id, shouldDisplay) => {
        const items = infoSelectors.map(item => {
            if (item.id === id) {
                item.detailsDivDisplayed = shouldDisplay;
            }
            return item;
        });
        setInfoSelectors(items);
    };



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
            </div>

            <div id="photoGrid" className="container">
                {infoSelectors.map(selector => <div className="selectorDiv"
                    style={{ backgroundImage: `url(${selector.url})` }}
                    key={selector.id}
                    onMouseEnter={() => detailsDivDisplay(selector.id, true)}
                    onMouseLeave={() => detailsDivDisplay(selector.id, false)}
                >



                    {selector.detailsDivDisplayed &&
                        <div>

                            <CSSTransitionGroup transitionName="example"
                                transitionEnterTimeout={10000}
                                transitionLeaveTimeout={10000}>
                                <div className="details">
                                    <h5>{selector.name}</h5>

                                    <Link to={`/${selector.link}`}> <button className="detailsBtn">Details</button></Link>


                                </div>
                            </CSSTransitionGroup>
                        </div>
                    }


                </div>)}
            </div>


            <div id="appointment">
                <p>START YOUR PATH TO WELLNESS</p>
                <button>REQUEST AN APPOINTMENT</button>
            </div>
            <div id="stuff">
                <div>
                    <h2>POSTS</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <div>
                    <h2>REVIEWS</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <div>
                    <h2>HOURS</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </>
    );
}