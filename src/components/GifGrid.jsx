import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const { images } = useFetchGifs(category);

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