import React from 'react';
import ItemInfo, { Field } from '../ItemInfo/itemInfo';
import { NavLink } from 'react-router-dom';
import SwService from '../../Service/swService';


function PlanetInfo({ planetId }) {
    const swService = new SwService();
    console.log(planetId);
    return (
        <ItemInfo
            itemId={planetId}
            getData={swService.getPlanet}>
                <Field field='name' label='Name' />
                <Field field='diameter' label='Diameter' />
                <Field field='gravity' label='Gravity' />
                <Field field='population' label='Population' />
                <Field field='climate' label='Climate' />
                <button className='btn btn-primary' style={{margin:'5% auto'}}>
                    <NavLink 
                        style={{textDecoration:'none', fontWeight: "bold", color: 'white'}} 
                        to='/residents/'>
                            Residents</NavLink>
                </button>
                <button className='btn btn-danger' style={{margin:'30% auto'}}>   
                    <NavLink 
                        style={{textDecoration:'none', fontWeight: "bold", color: 'white'}} 
                        to='/planets/'>
                            Back</NavLink>
                </button>
        </ItemInfo>
    )
}

export default PlanetInfo;