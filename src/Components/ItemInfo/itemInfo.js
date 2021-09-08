import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlanet } from '../../actions';
import Spinner from '../spinner';

// const Field = ({planet, field, label }) => {
//     return (
//         <li className="list-group-item d-flex justify-content-between">
//             <span className="term">{label}</span>
//             <span>{planet[field]}</span>
//         </li>
//     )
// }

// export {Field};

const ItemInfo = ({ getPlanet, id, planets, planet, store }) =>  {
    
    useEffect(() => {
        const result = planets.filter(item => item.id === id);
        getPlanet(result);
    }, []);

    if (planets.length === 0) {
        return
    }
    // const planet = planets.filter(item => item.id === id);
    
    console.log(planet);
    return (
        
        <div style={{height: '100%'}}>
           {
               planet.map(item => {
                    const { name, id, climate, population, gravity, diameter, terrain } = item;
                    return (
                        <div 
                        key={id} 
                        className="card" 
                        style={{width: '30rem', cursor: 'pointer', margin: '10px auto'}}>
                            <div className="card-body align-items-center">
                                <h2 className="card-title">{name}</h2>
                                <h5 className="card-subtitle mb-2 text-muted">Climate: {climate}</h5>
                                <p className="card-text">Population: {population}</p>
                                <ul className="sibs">
                                    <li>Gravity: {gravity}</li>
                                    <li>Diameter: {diameter}</li>
                                    <li>Terrain: {terrain}</li>
                                </ul>
                            </div>
                        </div>
                   )
               })
           }
        </div>
    )
}

const mapStateToProps = ({planets, planet}) => {
    return {
        planets,
        planet
    }
}

const mapDispatchToProps = {
    getPlanet
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);