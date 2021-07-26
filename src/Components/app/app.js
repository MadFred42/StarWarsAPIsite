import React from 'react';
import { MainPage, PlanetPage, PlanetInfo, CharPage, CharInfo } from '../pages';
import styled from 'styled-components';
import img from './star-wars.jpg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppBody = styled.div`
    background: url(${img}) center center no-repeat;
    background-size: cover;
    height: 1000px;
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
                            return <PlanetInfo planetId={id} />
                        }
                    } />
                    <Route path='/residents/' exact component={CharPage} />
                    <Route path='/residents/:id' render={
                        ({match}) => {
                            const {id} = match.params;
                            return <CharInfo charId={id} />
                        }
                    } />
                </Switch>
            </AppBody>
        </Router>
    )
}

export default App;