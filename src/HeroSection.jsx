import React, { useState } from "react";


function Header(props){
    const [name, setName] = useState("initialvalue");
    const sampleArray =["ashlesh","html","css","js","22",2];
    const [color, setColor] = useState("blue");
    return(
        <div>
            <h1 style={{background:props.propsData}}>This is react</h1>
            <p>{props.propsData}</p>
            {sampleArray.map((item)=>{
                return <h1>{item}</h1>;
            })}
             <ol>
                    {sampleArray.map((item)=>{
                        return <li>{item}</li>;
                    })}
                </ol>
                <h1>{name}</h1>
                <button onClick={() => setName("update value")}>Click Here</button>
                <p>{color }</p>
                <form style={{backgroundColor:color}}>
                    <input />
                </form>
                <div onClick={() => setColor("yellow")}> change</div>
        </div>
    )
}
export default Header;