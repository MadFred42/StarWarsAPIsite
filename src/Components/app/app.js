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
                    <Route path ='/planets/:id' exact render={
                        ({match}) => {
                            const { id } = match.params;
                            return <PlanetInfo planetId={id} />
                        }
                    } />
                    <Route path='/planets/:planetId/residents'  exact component={CharPage}/>
                    <Route path='/planets/:planetId/residents/:charId' component={CharInfo} />
                </Switch>
            </AppBody>
        </Router>
    )
}

export default App;


// render={
//     ({match}) => {
//         const { id } = match.params;
//         return <CharInfo charId={id} />
//     }
// }