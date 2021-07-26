import React from 'react';
import ItemInfo, { Field } from '../ItemInfo/itemInfo';
import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';


function PlanetInfo({ planetId }) {
    const swService = new SwService();
    
    return (
        <ItemInfo
            itemId={planetId}
            getData={swService.getPlanet}>
                <Field field='name' label='Name' />
                <Field field='diameter' label='Diameter' />
                <Field field='gravity' label='Gravity' />
                <Field field='population' label='Population' />
                <Field field='climate' label='Climate' />
                <a href='/residents/' className='btn btn-primary'>Residents</a>
                <BackButton link='/planets' props="30%"/>
        </ItemInfo>
    )
}

export default PlanetInfo;