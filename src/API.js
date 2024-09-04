import axios from "axios";
import React, { useEffect, useState } from "react";


function API() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        axios.get("https://622eda275c86fd315eb65e57.mockapi.io/employees/employees").then(
            res => {
                console.log(res, "res");
                setUserData(res.data)
            }
        )
    })
    return (
        <>
            <div>API INTEGRATIONS</div>
            <ol>
                {userData.map((user) => {
                    return (
                        <li>{user.name}</li>

                    )
                })}

            </ol>
        </>

    )
}
export default API