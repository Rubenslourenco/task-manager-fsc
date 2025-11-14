import { useEffect, useState } from "react";

const HookUseEffect = () => {
    const [items, setItems] = useState([]);
    const [resourceType, setResourceType] = useState('comments');

    useEffect(() => {
        const fetchResource = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const responseJson = await response.json();
            console.log(responseJson);
            setItems(responseJson);
        };
        console.log("Resource type changed:", resourceType);
        fetchResource();
    }, [resourceType]);

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }
    return (
    <div>
        <h1>{resourceType}</h1>
        <div style={{display: "flex", alignItems: "center"}}>

        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
       </div>
       
       {items.map((item) => (
        <p>{item.id}</p>
       ))}
       

    </div>
);
}
 
export default HookUseEffect;