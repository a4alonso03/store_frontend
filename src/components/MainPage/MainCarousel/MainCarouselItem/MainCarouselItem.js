import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import Media from 'react-media'
import './MainCarouselItem.scss'

const MainCarouselItem = (props) => {

    return (
        <Media query={{minWidth: 599}}>
            {matches =>
                matches ? (
                    <img className="carousel-img big" src={props.srcBig} alt=""/>
                ) : (
                    <img className="carousel-img medium" src={props.srcMedium} alt=""/>
                )
            }
        </Media>
    );

}

export default MainCarouselItem;

