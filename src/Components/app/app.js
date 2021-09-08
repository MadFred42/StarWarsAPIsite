import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { ResidentsPage, MainPage } from '../pages';
import img from './SWbackground.jpg'

const App = ({ planetId }) => {
    return (
        <div 
        style={{height: '100%', backgroundImage: `url(${img})`, backgroundAttachment: 'fixed'}}>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/planet/:id/residents' component={ResidentsPage} />
            </Switch>
        </div>
    )
}

export default App;