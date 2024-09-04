import React, { useState } from 'react';
import './Color.css';

// function Color() {
//     function blue() {
//         document.body.style.backgroundColor = 'blue';
//     }

//     function red() {
//         document.body.style.backgroundColor = 'red';
//     }

//     function green() {
//         document.body.style.backgroundColor = 'green';
//     }

//     return (
//         <div style={{backgroundColor: 'violet', height: '50px', justifyContent:'center', alignItems:'center', padding: '7px', margin:'5px'}}>
//             <nav>
//                 <ul className='navbar'>
//                     <li>
//                         <button onClick={blue}>Blue</button>
//                     </li>
//                     <li>
//                         <button onClick={red}>Red</button>
//                     </li>
//                     <li>
//                         <button onClick={green}>Green</button>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

function Color() {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleColorChange = (color) => {
        setBackgroundColor(color);
        document.body.style.backgroundColor = color;
    };

    return (
        <div className='Color'>
            <button onClick={() => handleColorChange('red')}>Red</button>
            <button onClick={() => handleColorChange('blue')}>Blue</button>
            <button onClick={() => handleColorChange('green')}>Green</button>
        </div>
    );
}

export default Color;
