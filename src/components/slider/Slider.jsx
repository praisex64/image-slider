import { useState, useEffect} from 'react'; 
import React from 'react'; 
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {sliderData} from "./slider-data"; 



const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0); 
    const slideLength = sliderData.length; 


    const nextSlide = () => {

        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log('next slide');

    }; 

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1); 
    }

    useEffect(() => {
        setCurrentSlide(0); 
    },[])


    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

            {sliderData.map((slide, index) => {

                    return (
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <hr /> 

                                <button>Get Started</button>
                            </div>
                            </>
                        )}
                        </div>
                    )

                
            })}

               
        </div>
    )

}

export default Slider; 