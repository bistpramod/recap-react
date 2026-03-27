import { useState } from "react"
export function Counter(){
    const [count, setCount] = useState(0)
    return (
    <>
    <div>
        <p>stocks Ordered = {count}</p>
        <button onClick={() => setCount((inc) => inc + 1)}>
  Click me
</button>
    </div>
    
    </>
    )
    
}