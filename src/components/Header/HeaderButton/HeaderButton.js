import React from 'react';
import './HeaderButton.scss';

const HeaderButton = (props) => {
    return (
        <div className="header-button">

            <img src={props.image} alt="icon"/>
            <h2>{props.text}</h2>
        </div>
    );
};

export default HeaderButton;