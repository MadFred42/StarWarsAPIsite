import React, { Component } from 'react';
import SwService from '../../Service/swService';    
import ItemInfo, { Field } from '../ItemInfo/itemInfo';

export default class CharPage extends Component {
    swService = new SwService();

    render() {
        return (
            <ItemInfo 
            getData={this.swService.getCharacter}
            itemId={this.props.charId}>
                <Field field='name' label='Name:' />
                <Field field='birth_year' label='Year of birth:' />
                <Field fiel='gender' label='Gender:' />
                <Field field='hair_color' label='Hair color:' />
                <Field field='height' label='Height:' />
                <Field field='skin_color' label='Skin color:' />
            </ItemInfo>
        )
    }
}