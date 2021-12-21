import React from 'react'

function Victory(props) {
    window.location.reload(false)
    if(props.flag == "true"){
    return (
        <div>
            {alert("VICTORY! Press Okay to keep Playing.")}
        </div>
    )
}
}
export default Victory
