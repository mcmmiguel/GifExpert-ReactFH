import { useState } from "react";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragaon Ball']);

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}


            {/* Listado de GIF */}
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
