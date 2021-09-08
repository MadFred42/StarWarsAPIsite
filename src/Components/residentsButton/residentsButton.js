import React from 'react';
import { Link } from 'react-router-dom';

const ResidentsButton = ({ name }) => {
    
    return (
        <Link to={`/planet/${name}/residents`} style={{textDecoration: 'none'}}>
            <button 
            className='show btn btn-primary' 
            style={{margin: 'auto', width: '300px', borderRadius: '30px'}}>
                See residents</button>
        </Link> 
    )
};


export default ResidentsButton;
