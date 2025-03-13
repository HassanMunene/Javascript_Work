import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
        <div>Display the count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}

export default Counter;