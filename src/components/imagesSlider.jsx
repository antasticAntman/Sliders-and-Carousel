import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'


export default function ImagesSlider(props){
    const [imageIndex, setImageIndex] = useState(4);
         

    return(
        <div style = {{width:'100%', height:'100%', position:'relative'}} >
            <img src={props.catIMAGES[imageIndex]} alt ={`cat Images ${imageIndex} `} className="img-slider-div"/>
            <button className="img-slider-btn" style={{left:0}}><ArrowBigLeft/></button>
            <button className="img-slider-btn" style={{right:0}}><ArrowBigRight/></button>
        </div>
    )
}