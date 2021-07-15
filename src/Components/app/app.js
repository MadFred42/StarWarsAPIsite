import React from 'react';
import { Container } from 'reactstrap';
import { CharPage, PlanetsPage } from '../pages';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppBody = styled.div`
    width: 35%;
    display: block;
    justify-content: center;
    border-radius: 15%;
    margin: 40px 10px
`;

function App() {

    return (
        <Router>    
            <AppBody>
                <Container>
                    <Route path='/' exact component={PlanetsPage} />
                    <Route path ='/characters/:id' render={
                        ({match}) => {
                            const {id} = match.params;
                            return <CharPage charId={id}/>
                        }
                    } />
                </Container>
            </AppBody>
        </Router>
    )
}

export default App;