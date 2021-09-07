import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WithStarWarsService from '../hoc';
import { filterItems, planetLoaded } from '../../actions';

import './planetList.css'

const PlanetList = ({ planetLoaded, filterItems, planets, filter, loading, service }) => {

    useEffect(() => {
        service.getAllPlanets()
            .then(data => planetLoaded(data))
            .catch(err => console.log(err));
    }, []);

    return(
        <>
            <h1 style={{color: 'white'}}>Choose any planet you want.</h1>
            <div className='d-flex flex-wrap justify-content-between'>
                {
                    planets.map(item => {
                        console.log(item);
                        const { id, name, population, gravity, climate } = item;
                        
                        return (
                            <div key={id} className="planets card" style={{width: '15rem', cursor: 'pointer'}}>
                                <div className="card-body align-items-center">
                                    <h2 className="card-title">{name}</h2>
                                    <h5 className="card-subtitle mb-2 text-muted">Climate: {climate}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Gravity: {gravity}</h6>
                                    <p className="card-text">Population: {population}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

const mapStateToProps = ({ planets, filter, loading }) => {
    return {
        planets,
        filter,
        loading
    }
}

const mapDispatchToProps = {
    planetLoaded,
    filterItems
}

export default WithStarWarsService()(connect(mapStateToProps, mapDispatchToProps)(PlanetList));