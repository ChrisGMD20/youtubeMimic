import next from "../assets/SVGs/next.svg"
import prev from "../assets/SVGs/prev.svg"

import { useRef, useState, useEffect } from "react"

import Category from "./Category"


const categoryArray = ["All", "Music", "Computer programming", "Gaming", "Reggae", "Live", "Study Skills", "Sketch comedy", "Computer Hardware", "News", "Gadgets", "Playlists", "Television comedy", "Ambient music", "Ceremonies", "Pop music", "Animated films", "Action-adventure games", "Piano", "Podcasts", "Recently uploaded", "Stir frying", " Martial Arts Movies", "Ice cream", "Lunches"]

export default function CategoryNav() {

    const prevRef = useRef();
    const nextRef = useRef();
    const categoryNavRef = useRef();

    const [scrollX, setScrollX] = useState(0);
    const [hidden, setHidden] = useState(null);

    function handleScrollLeft() {
        const scrollContainer = categoryNavRef.current;
        scrollContainer.scrollLeft -= 200;
        if (scrollContainer.scrollLeft > 200) {
          setScrollX((prev) => prev - 200);
        } else {
          setScrollX(0);
        }
        console.log(scrollContainer.scrollLeft)
      }
    
    function handleScrollRight() {
    const maxScrollValue =
        categoryNavRef.current.scrollWidth -
        categoryNavRef.current.getBoundingClientRect().width;
    const scrollContainer = categoryNavRef.current;
    scrollContainer.scrollLeft += 200;
    if (scrollContainer.scrollLeft <= maxScrollValue - 200) {
        setScrollX((prev) => prev + 200);
    } else {
        setScrollX(maxScrollValue);
    }
    console.log(scrollContainer.scrollLeft)
    console.log(maxScrollValue)
    }

    useEffect(()=>{
        const maxScrollValue = categoryNavRef.current.scrollWidth - categoryNavRef.current.getBoundingClientRect().width
    
        if(scrollX === 0){
            setHidden("prev")
        } else if(scrollX === maxScrollValue){
            setHidden("next")
        }else{
            setHidden(null)
        }

    }, [scrollX])


    return(
        <div  className="category-nav">
            <button ref={prevRef}  hidden={hidden==='prev'? true:false} onClick={handleScrollLeft} id="prev" className="transparent-button nav-button"><img src={prev} alt="prev" /></button>
            <ul ref={categoryNavRef} className="category-nav-list">
                {
                    categoryArray.map(category => (
                        <Category key={category} name={category} />
                    ))
                }
            </ul>
            <button ref={nextRef} hidden={hidden==='next'? true:false} onClick={()=>{handleScrollRight()}} id="next" className="transparent-button nav-button"><img src={next} alt="next" /></button>
        </div>
    )
}