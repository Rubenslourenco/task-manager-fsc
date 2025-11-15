import { useState, useMemo } from "react";

const HookUseMemo = () => {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

        const doubleNumber = useMemo(() => {
            return slowFunction(number);
        }, [number]);

    return ( 
        <>
           <p>{number}</p>
            <input value={text} onChange={(e) => setText(e.target.value)} />   
            <p>Text: {text}</p>     
        </>
     );
}

const slowFunction = (num) => {
    console.log("Calling Slow Function");
    for(let i = 0; i < 10000; i++) {}
     return num + 2;

}
 
export default HookUseMemo;