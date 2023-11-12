import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react'


export default function ImagesSlider(props){
    const [imageIndex, setImageIndex] = useState(0);
     console.log()
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
            <div  style={{width:'100%', height:'100%', display:'flex', overflow:"hidden"}}>
                {props.catIMAGES.map( ({url, alt}) => (
                    console.log('url',url),
                    <img 
                        key={url} 
                        src={url} 
                        alt ={alt} 
                        className="img-slider-div"
                        style ={{translate: `${-100 * imageIndex}%`}}    
                    />
                ))}
            </div>
            
            <button 
            onClick={showPrevImage}
            className="img-slider-btn" 
            style={{left:0}}
            aria-label="View Previous Image"
            >
                <ArrowBigLeft/>
            </button>

            <button 
            onClick={showNextImage} 
            className="img-slider-btn" 
            style={{right:0}}
            aria-label="View Next Image"
            >
                <ArrowBigRight/>
            </button>

            <div style=
                {{
                    position:'absolute', 
                    bottom:'.5rem', 
                    left:'50%', 
                    translate:'-50%', 
                    display:'flex', 
                    gap:'.25rem'
                
                }}>
                {props.catIMAGES.map( (_ , index) => (
                    <button
                        key={index} 
                        className="img-slider-dot-btn" 
                        onClick={() => setImageIndex(index)}
                        aria-label={`View Image ${index}`} 
                    >
                        {index === imageIndex ? <CircleDot/> : <Circle/>}
                        </button>
                ))}
            </div>

        </div>
    )
}