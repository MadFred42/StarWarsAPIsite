import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
    
    return (
        <Link to='/'>
            <button className='btn btn-danger' style={{margin: '10px 50px', width: '150px'}}>Back</button>
        </Link>
    )
}

export default BackButton;