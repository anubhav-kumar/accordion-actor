import { useState } from "react"
import './style.css';

type stateFul = {
    initialNumber: number
};

const StatefulComponent = (props: stateFul) => {
    const {initialNumber} = props;
    const [number, setnumber] = useState(initialNumber);
    return (
        <div className="button-series">
            <button onClick={() => {setnumber(number-1)}}>-</button>
            <p>{number}</p>
            <button onClick={() => {setnumber(number+1)}}>+</button>
        </div>
    )
}

export default StatefulComponent;
