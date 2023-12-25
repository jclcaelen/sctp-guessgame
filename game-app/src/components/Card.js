import { useContext } from 'react';

import Input from "./Input";
import Button from "./Button";

function Card({

    handlerGuess

}) {

    // Define context
    const ctx = useContext();

    return (
        <div>
            <Input value={ctx.guess} label="User Guess" onChange={handlerGuess} />
            <Button label="Guess!" />
        </div>
    );
}

export default Card;