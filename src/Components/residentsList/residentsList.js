import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlanetResidents } from '../../actions';
import WithStarWarsService from '../hoc';
import Spinner from '../spinner';

import './residentList.css'

const ResidentsList = ({ getPlanetResidents, loading, planet, residents, service }) => {
    
    useEffect(() => {
        service.getResidents(planet.residents)
            .then(item => getPlanetResidents(item))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='d-flex flex-wrap' style={{alignItems: 'center', height: '900px'}}>
            {loading ? <Spinner /> : null}
            {
                residents.map(item => {
                    const {
                        birth_year, eye_color, gender, hair_color, height, id, mass, name, skin_color
                    } = item;

                    return (
                        <div 
                        key={id} 
                        className="planets card" 
                        style={{width: '30rem', cursor: 'pointer', margin: '10px auto'}}>
                            <div className="card-body align-items-center">
                                <h2 className="sibs card-title">{name}</h2>
                                <h5 className="sibs card-subtitle mb-2 text-muted">Birth Year: {birth_year}</h5>
                                <p className="sibs card-text">Gender: {gender}</p>
                                <ul className="show sibs">
                                    <li>Height: {height}</li>
                                    <li>Weight: {mass}</li>
                                    <li>Skin Color: {skin_color}</li>
                                    <li>Hair Color: {hair_color}</li>
                                    <li>Eye Color: {eye_color}</li>
                                </ul>                          
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = ({ loading, planet, planetId, residents }) => {
    return {
        loading,
        planet,
        planetId,
        residents
    }
}

const mapDispatchToProps = {
    getPlanetResidents
}

export default WithStarWarsService()(connect(mapStateToProps, mapDispatchToProps)(ResidentsList));