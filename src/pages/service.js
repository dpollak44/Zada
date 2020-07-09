import React from 'react';



export default (props) => {
    console.log(props.service);
    return (
        <div>
            <h1>Service</h1>
            {props.service && <h2>{props.service.name}</h2>}
        </div>
    );
}