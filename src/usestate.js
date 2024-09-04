// import React, { useState } from "react";

// export const Test = () => {
//   const [value, setValue] = useState(false);

//   setTimeout(() => {
//     console.log("request sent");
//   }, 2000);

//   const clickHandler = () => {
//     setValue((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <h1>{value ? "Ashlesh" : "hey"}</h1>
//       <button onClick={clickHandler}>Click me</button>
//     </div>
//   );
// };
// import React, { useEffect } from "react";
// export const Test = () => {
// useEffect(() => {
//   console.log("Effect");
// }, []);
// console.log("rendered");
// return <>{console.log("UI rendered")}</>;}

// import React, { useState, useEffect } from "react";
 
// export const Test = () => {
//   const [value1, setValue1] = useState("VALUE 1");
//   const [value2, setValue2] = useState("VALUE 2");
//   const [value3, setValue3] = useState("VALUE 3");
 
//   useEffect(() => {
//     console.log("effect");
//   }, [value1, value2]);
 
//   const clickHandler1 = () => {
//     setValue1((prevState) => prevState + "VALUE 1");
//   };
//   const clickHandler2 = () => {
//     setValue2((prevState) => prevState + "VALUE 2");
//   };
//   const clickHandler3 = () => {
//     setValue3((prevState) => prevState + "VALUE 3");
//   };
//   return (
//     <div>
//       <p onClick={clickHandler1}>{value1}</p>
//       <p onClick={clickHandler2}>{value2}</p>
//       <p onClick={clickHandler3}>{value3}</p>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
 
// export const Test = () => {
//   const [value, setValue] = useState("VALUE");
 
//   useEffect(() => {
//     console.log("effect");
//   }, []);
 
//   const clickHandler = () => {
//    setValue((prevState) => prevState + "VALUE");
//   };
  
//   return (
//     <div>
//       <p onClick={clickHandler}>{value}</p>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
 
export const Test = () => {
  const [value, setValue] = useState(false);
 
  useEffect(() => {
    console.log("effect");
  });
 
  const clickHandler = () => {
    setValue((prevState) => !prevState);
  };
 
  return (
    <div>
      <h1>{value ? "hello" : "hey"}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )};