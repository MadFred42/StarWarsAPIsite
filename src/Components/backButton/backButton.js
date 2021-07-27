import React from 'react';

function BackButton({ link, props }) {
    
    return (
        <a href={link} className='btn btn-danger' style={ props }>Back</a>
    )
}

export default BackButton;