import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WithStarWarsService from '../hoc';
import { getPlanet, planetLoaded } from '../../actions';
import Spinner from '../spinner'
import ResidentsButton from '../residentsButton';

import './planetList.css'

const PlanetList = ({ planetLoaded, planets, loading, service }) => {
    
    useEffect(() => {
        service.getAllPlanets()
            .then(data => planetLoaded(data))
            .catch(err => console.log(err));
    }, []);

    return(
        <div className='d-flex flex-wrap' style={{alignItems: 'center'}}>
            {loading ? <Spinner /> : null}
            {
                planets.map(item => {
                    const {
                        climate, diameter, gravity, id, name, population, terrain 
                    } = item;
                    return (
                        <div 
                        key={id} 
                        className="planets card" 
                        style={{width: '30rem', cursor: 'pointer', margin: '10px auto'}}>
                            <div className="card-body align-items-center">
                                <h2 className="sibs card-title">{name}</h2>
                                <h5 className="sibs card-subtitle mb-2 text-muted">Climate: {climate}</h5>
                                <p className="sibs card-text">Population: {population}</p>
                                <ul className="show sibs">
                                    <li>Gravity: {gravity}</li>
                                    <li>Diameter: {diameter}</li>
                                    <li>Terrain: {terrain}</li>
                                </ul>
                                <ResidentsButton name={name} planet={item} />                           
                            </div>
                        </div>
                    )
                })
            }
        </div>
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
    getPlanet,
    planetLoaded
}

export default WithStarWarsService()(connect(mapStateToProps, mapDispatchToProps)(PlanetList));