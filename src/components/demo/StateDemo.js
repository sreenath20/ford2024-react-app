import { useState } from "react";


function StateDemo() {

    let [index, setIndex] = useState(0);

    let count = 0;

    const handleCount = () => {
        count++;
        console.log("count:" + count);
    }
    const handleIncrementIndex = () => {
        setIndex(index => index + 1);
        console.log("index" + index);
    }
    return (
        <>
            <p>
                count:{count}
                <button onClick={handleCount}>Increment count</button>
            </p>
            <p>
                index:{index}
                <button onClick={handleIncrementIndex}>Increment index</button>
            </p>

        </>
    );
}

export default StateDemo;