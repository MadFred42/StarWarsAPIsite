import React from 'react';
import { Container } from 'reactstrap';
import { MainPage, PlanetPage, PlanetInfo } from '../pages';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppBody = styled.div`
    width: 35%;
    border-radius: 15%;
    margin: 1% auto;
`;

function App() {

    return (
        <Router>    
            <AppBody>
                <Switch>
                    <Route path='/' exact component={MainPage} />
                    <Route path ='/planets/' exact component={PlanetPage} />
                    <Route path ='/planets/:id' render={
                        ({match}) => {
                            const {id} = match.params;
                            console.log(id);
                            return <PlanetInfo planetId={id} />
                        }
                    } />
                </Switch>
            </AppBody>
        </Router>
    )
}

export default App;