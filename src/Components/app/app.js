import React from 'react';
import { Container } from 'reactstrap';
import { PlanetsPage } from '../pages';
import styled from 'styled-components';

const AppBody = styled.div`
    width: 35%;
    display: block;
    justify-content: center;
    border-radius: 15%;
    margin: 40px 10px
`;

function App() {

    return (
        <AppBody>
            <Container>
                <PlanetsPage />
            </Container>
        </AppBody>
    )
}

export default App;