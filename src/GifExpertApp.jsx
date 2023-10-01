import { useState } from "react";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragaon Ball']);

    const onAddCategory = () => {
        setCategories(['Halo', ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}


            {/* Listado de GIF */}
            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                {

                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })

                }
            </ol>


            {/* GIF item */}



        </>
    )
}

export default GifExpertApp;
