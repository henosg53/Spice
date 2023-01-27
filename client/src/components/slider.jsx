import React  from "react";
// import { useState } from "react";
import { Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import '../App.css'
// import useMediaQuery from "../useMediaQuery";

function Slider(){
    const images = [
        "/slider_imgs/slide-img.jpg",
        "/slider_imgs/slide-img2.jpg",
        "/slider_imgs/slide-img3.jpg"
    ]
    // const matches = useMediaQuery('(max-width: 600px)')
        return(
            
            <Fade>
                {images.map((image,index)=>{
                    return(
                    <div className="h-96 sm:h-[500px]" key={index}>
               
                        <div className="flex-1 bg-cover" style={{ 
                                'backgroundImage': `url(${process.env.PUBLIC_URL+image})`,
                                        'height': "600px" 
                                        }}>
                    
                        </div>  
                    </div>
                    )
                })
                }

            </Fade>
        )
}

export default Slider