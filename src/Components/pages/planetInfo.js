import React from 'react';
import ItemInfo, { Field } from '../ItemInfo/itemInfo';
import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';
import { Link } from 'react-router-dom';


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
                <Link to={`/planets/${planetId}/residents`} className='btn btn-primary'>Residents</Link>
                <BackButton link='/planets' props={{margin: "30%"}} />
        </ItemInfo>
    )
}

export default PlanetInfo;