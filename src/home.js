// header.js
import axios from "axios";
import React, { useEffect } from "react";

function Ashu() {
  useEffect(() => [
    axios.get("https://622eda275c86fd315eb65e57.mockapi.io/employees/employees").then(
      res => {
        console.log(res, "res")
      }
    )
  ])
  return <h1>This is Home Page</h1>;
}

export default Ashu;
