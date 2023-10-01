import { useState } from "react";

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    return (

        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar GIF's"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    );
};

export default AddCategory