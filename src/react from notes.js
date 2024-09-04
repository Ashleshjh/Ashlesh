import React from 'react';

// class Car extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is a heading</h1>
//                 <ul>
//                     <li>First</li>
//                     <li>Second</li>
//                     <li>Third</li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Car;

// function Garage() {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//         <>
//             <ul>
//                 {cars.map((car) => {
//                     return (<li>{car}</li>)
//                 })
//                 }
//             </ul>
//         </>
//     );
// }

// export default Garage;

// import { useState } from 'react';
// function Favorite() {
//     const [color, setColor] = useState("red");
//     return (
//         <div>
//             <h1>My favorite color is {color}!</h1>
//             <button type="button" onClick={() => setColor("blue")}>Blue</button>
// </div >
// )
// }
// export default Favorite;

// import { useState, useEffect } from "react";
// function Timer() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1);
//         }, 1000);
//     });

//     return <h1>I have rendered {count} times!</h1>;
// }
// export default Timer;

import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}  
                />
            </label>
            <input type="submit" />
        </form>
    )
}
export default MyForm;