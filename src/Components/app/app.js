import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PlanetList from '../planetList';

const App = () => {
    return (
        <Switch>
            <PlanetList />
        </Switch>
    )
}

export default App;