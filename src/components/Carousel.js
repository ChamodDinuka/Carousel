import "./styles.css";
import React, { useState, useEffect } from "react";
import { SlideImage, StyledSlider } from "./SlideImage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import axios from "axios";

function Carousel({ slides, Infinite }) {
    const [current, setCurrent] = useState(0);
    const [state, setstate] = useState({
        images: []
    })
    const nextSlide = () => {
        if(Infinite)
            setCurrent(current === state.images.slides.length - 1 ? 0 : current + 1);
        else
            setCurrent(current === state.images.slides.length - 1 ? current : current + 1); 
        };

    const prevSlide = () => {
        if(Infinite)
            setCurrent(current === 0 ? state.images.slides.length - 1 : current - 1);
        else
            setCurrent(current === 0 ? 0 : current - 1);
    };
 
    // useEffect(() => {
    // if (Infinite === true) 
    //     setTimeout(() => {
            
    //     }, 1000);
    // }, [current])
    useEffect(() => {
        axios.get(`http://localhost:3600/api/carousel?slides=${slides}`)
            .then(response => {
                setstate({
                    images:response.data
                })
            })
    }, []) 

    return (
        <StyledSlider>
            <FaChevronLeft className="leftArrow" onClick={prevSlide} />
            <FaChevronRight className="rightArrow" onClick={nextSlide} />
            {state?.images?.slides?.map((slide, index) => {  //short hand null check
                return (
                    <div key={index}>
                        {index === current && <SlideImage src={slide.image}/>}
                        {index === current && <div className="centered">{slide.title}</div>}
                        {index === current && <div className="centered" style={{marginTop:'30px'}}>{slide.subTitle}</div>}
                    </div>
                );
            })}
        </StyledSlider>
    );
}

export default Carousel
