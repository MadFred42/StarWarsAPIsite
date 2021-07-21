import React from 'react';
import SwService from '../../Service/swService';    
import ItemInfo, { Field } from '../ItemInfo/itemInfo';

function CharPage({ charId }) {
    const swService = new SwService();

    return (
        <ItemInfo 
        getData={swService.getCharacter}
        itemId={charId}>
            <Field field='name' label='Name' />
            <Field field='birth_year' label='Year of birth' />
            <Field fiel='gender' label='Gender:' />
            <Field field='hair_color' label='Hair color' />
            <Field field='height' label='Height' />
            <Field field='skin_color' label='Skin color' />
        </ItemInfo>
    )
}

export default CharPage;