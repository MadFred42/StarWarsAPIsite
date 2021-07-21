import React from 'react';
import styled from 'styled-components';
import SwService from '../../Service/swService';
import { Link } from 'react-router-dom';

const MainInfo = styled.div`
    margin: auto;
`;

const GetStart = styled.button`

`;

function MainPage({ history }) {

    const swService = new SwService();
    
    return (
        <MainInfo>
            <GetStart className='btn btn-light'>
                <Link to='/planets'>Click here to get started</Link>
            </GetStart> 
        </MainInfo>
    )
}

export default MainPage;