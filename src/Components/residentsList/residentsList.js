import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlanetResidents } from '../../actions';
import WithStarWarsService from '../hoc';
import Spinner from '../spinner';

import './residentList.css'

const ResidentsList = ({ getPlanetResidents, loading, planet, filteredResidents, service }) => {
    console.log(filteredResidents);
    useEffect(() => {
        service.getResidents(planet.residents)
            .then(item => {getPlanetResidents(item); console.log(item)})
            .catch(err => console.log(err));
    }, [planet]);

    

    return (
        <div className='d-flex flex-wrap' style={{alignItems: 'flex-start', height: '900px', margin: '50px'}}>
            {loading ? <Spinner /> : null}
            {
                (filteredResidents.length === 0 && !loading) ? 
                    <div style={{color: 'white', fontSize: '50px'}}>
                        Sorry, but nobody lives here...
                    </div> : 
                null
            }
            {    
                filteredResidents.map(item => {
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

const mapStateToProps = ({ loading, planet, planetId, filteredResidents }) => {
    return {
        loading,
        planet,
        planetId,
        filteredResidents
    }
}

const mapDispatchToProps = {
    getPlanetResidents
}

export default WithStarWarsService()(connect(mapStateToProps, mapDispatchToProps)(ResidentsList));