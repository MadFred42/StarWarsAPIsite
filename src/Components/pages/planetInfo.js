import React, { useEffect, useState } from 'react';
import ItemInfo, { Field } from '../ItemInfo/itemInfo';
import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResInfo = styled.h1`
    margin: 0 auto;
`;

function PlanetInfo({ planetId }) {

    const swService = new SwService();

    const [residents, updateResidents] = useState([]);
    
    useEffect(() => {
        swService.getPlanet(planetId)
            .then(item => {
                updateResidents(item.residents);
            })
    }, []);

    const link = <Link to={`/planets/${planetId}/residents`} className='btn btn-primary'>Residents</Link>;
    const content = residents.length === 0 ? <ResInfo>No one live here, sorry...</ResInfo> : link;

    return (
        <ItemInfo
            itemId={planetId}
            getData={swService.getPlanet}>
                <Field field='name' label='Name' />
                <Field field='diameter' label='Diameter' />
                <Field field='gravity' label='Gravity' />
                <Field field='population' label='Population' />
                <Field field='climate' label='Climate' />
                {content}
                <BackButton link='/planets' props={{margin: "30%"}} />
        </ItemInfo>
    )
}

export default PlanetInfo;