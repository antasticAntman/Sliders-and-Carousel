import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'


export default function ImagesSlider(props){
    const [imageIndex, setImageIndex] = useState(0);
     
    function showNextImage (){
        setImageIndex( index => {
            if(index === props.catIMAGES.length - 1){
                return 0
            }
            return index + 1
        })
    }

    function showPrevImage(){
        setImageIndex( index => {
            if(index === 0){
                return props.catIMAGES.length - 1
            }

            return index - 1
        })
    }

    return(
        <div style = {{width:'100%', height:'100%', position:'relative'}} >
            <img src={props.catIMAGES[imageIndex]} alt ={`cat Images ${imageIndex} `} className="img-slider-div"/>
            <button onClick={showPrevImage} className="img-slider-btn" style={{left:0}}><ArrowBigLeft/></button>
            <button onClick={showNextImage} className="img-slider-btn" style={{right:0}}><ArrowBigRight/></button>
        </div>
    )
}