import React from 'react'
import Victory from './Victory'
function CheckValue(props) {
    const {randnum, current} = props
    var flag=""
    if( randnum == current ){
    return (
        <div>
            <h1>VOILA! CORRECT GUESS!!</h1>
            {flag="true"}             
            <Victory flag={flag} ></Victory>
        </div>
    )
}
    else if(Math.abs(randnum - current) < 3 ){
        return(
            <h2>YOU ARE CLOSE!</h2>
        )
    } else{return(
        <h2>NOT EVEN CLOSE!!</h2>
    )}
}

export default CheckValue
