import React from 'react';
import { withRouter } from 'react-router-dom';
// import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';
// import ItemInfo, { Field } from '../ItemInfo';

function CharInfo({ history, match  }) {
    // // const swService = new SwService();
    // const {charId} = match.params;
    // const {pathname} = history.location.prevPath;
    
    return (
        // <ItemInfo
        // getData={swService.getCharacter}
        // itemId={charId}>
        //     <Field field='birth_year' label='Year of birth' />
        //     <Field field='height' label='Height' />
        //     <Field field='mass' label='Mass' />
        //     <Field field='eye_color' label='Eye color' />
        //     <Field field='gender' label='Gender' />
        //     <Field field='hair_color' label='Hair color' />
        //     <Field field='skin_color' label='Skin color' />
        //     <BackButton link={`${pathname}`} props={{margin: "30%"}} />
        // </ItemInfo>
        <div> else</div>
        )
}

export default withRouter(CharInfo);