import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MainPage({ history }) {
    
    return (
            <button type='button' className='btn btn-light btn-lg'>
                <Link to='/planets'>Click here to get started</Link>
            </button> 
    )
}

export default MainPage;