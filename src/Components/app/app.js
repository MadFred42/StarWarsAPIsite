import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ResidentsPage, MainPage } from '../pages';
import img from './SWbackground.jpg'

const App = ({ planetId }) => {
    return (
        <div 
        style={{height: '100%', backgroundImage: `url(${img})`, backgroundAttachment: 'fixed'}}>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path={`/planet/:id/residents`} component={ResidentsPage} />
            </Switch>
        </div>
    )
}

const mapStateToProps = ({ planetId }) => {
    return {
        planetId
    }
}

export default connect(null, mapStateToProps)(App);