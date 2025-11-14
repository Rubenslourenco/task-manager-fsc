import { useState, useRef } from 'react';

const HookUseRef = () => {
    const [name, setName] = useState('');

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }
    return (
    <div>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello my name is {name}</p>
        <button onClick={focusInput} >Focus</button>
    </div>
     );
}
 
export default HookUseRef;