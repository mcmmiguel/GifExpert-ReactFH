import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        console.log(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid