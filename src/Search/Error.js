import React from 'react';

export default function erro(props) {
    return(
        <div>
            <h1 className ="error-msg">{props.message}</h1>
        </div>
    )
}