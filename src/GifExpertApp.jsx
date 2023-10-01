import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragaon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

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
