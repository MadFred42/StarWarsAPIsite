import React from 'react';

function BackButton({ link, props }) {
    return (
        <a href={link} className='btn btn-danger' style={{margin: props, position:'relative'}}>Back</a>
    )
}

export default BackButton;