import React from 'react';
import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';
import ItemInfo, { Field } from '../ItemInfo';

function CharInfo({ charId }) {
    const swService = new SwService();

    return (
        <ItemInfo
        getData={swService.getCharacter}
        itemId={charId}>
            <Field field='birth_year' label='Year of birth' />
            <Field field='height' label='Height' />
            <Field field='mass' label='Mass' />
            <Field field='eye_color' label='Eye color' />
            <Field field='gender' label='Gender' />
            <Field field='hair_color' label='Hair color' />
            <Field field='skin_color' label='Skin color' />
            <BackButton link='/residents/' props='30%' />
        </ItemInfo>
    )
}

export default CharInfo;