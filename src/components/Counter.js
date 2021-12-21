import React from 'react'
import { useState } from 'react/cjs/react.development'

function Counter(props) {  
    
    const {current, updateHandler} = props
    const [count, setCount] = useState(0)
    return (
        <div>
            
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+ {count}</button>
            {/* <div onLoad={() => updateHandler()}></div> */}
        </div>
    )
}

export default Counter
