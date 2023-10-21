import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'


export default function ImagesSlider(props){
    const [imageIndex, setImageIndex] = useState(4);
         

    return(
        <div>
            <img src={props.catIMAGES[imageIndex]} alt ={`cat Images ${imageIndex} `}/>
            <button><ArrowBigLeft/></button>
            <button><ArrowBigRight/></button>
        </div>
    )
}