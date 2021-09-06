import React from 'react';
import { Link } from 'react-router-dom';

function BackButton({ link, props }) {
    
    return (
        <Link to={link}>
            <button className='btn btn-danger' style={props}>Back</button>
        </Link>
    )
}

export default BackButton;