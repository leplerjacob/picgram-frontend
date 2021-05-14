import React, { useState, useEffect } from 'react'


const Counter = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("This happened")
    }, [count])

    return (
        <div>
           <div>{count}</div> 
           <button onClick={() => setCount(count+1)}>Add one</button>
        </div>
    )
}

export default Counter
