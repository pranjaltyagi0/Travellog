import React from "react";

function Mytrips(){

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    const data = fetch(backendUrl+'/upload/user')

    return(
        <>
        <div>
            Hello
        </div>
        </>
    )
}
export default Mytrips;