import React from 'react';
import {Carousel} from "react-bootstrap";
import MainCarouselItem from "./MainCarouselItem/MainCarouselItem";
import './MainCarousel.scss'


const MainCarousel = () => {

    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <MainCarouselItem
                    srcBig={"https://firebasestorage.googleapis.com/v0/b/brainstationstore.appspot.com/o/bulletsBig.jpg?alt=media&token=860ffacd-b81e-4d8b-922f-83e411fdacc6"}
                    srcMedium={"https://firebasestorage.googleapis.com/v0/b/brainstationstore.appspot.com/o/bulletsMedium.jpg?alt=media&token=198802dc-fabf-4df1-8704-78fe96b81245"}/>
            </Carousel.Item>
            <Carousel.Item>
                <MainCarouselItem
                    srcBig={"https://firebasestorage.googleapis.com/v0/b/brainstationstore.appspot.com/o/phone.png?alt=media&token=2658294a-1623-46ad-9cf0-773fac9e5136"}
                    srcMedium={"https://firebasestorage.googleapis.com/v0/b/brainstationstore.appspot.com/o/phoneMedium.png?alt=media&token=c6cf245b-00c9-428b-aa7c-36e63f6572be"}/>
            </Carousel.Item>
        </Carousel>
    );
};

export default MainCarousel;

/*
<MainCarouselItem srcBig={"https://firebasestorage.googleapis.com/v0/b/brainstationstore.appspot.com/o/bulletsBig.jpg?alt=media&token=860ffacd-b81e-4d8b-922f-83e411fdacc6"}
                                  srcMedium={"https://firebasestorage.googleapis.com/v0/b/brainstationstore.appspot.com/o/bulletsMedium.jpg?alt=media&token=198802dc-fabf-4df1-8704-78fe96b81245"}/>
 */