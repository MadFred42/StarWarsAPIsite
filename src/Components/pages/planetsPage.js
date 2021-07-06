import React, { useState, useEffect } from 'react';
import SwService from '../../Service/swService';
import PlanetsInfo, {Field} from '../plantesInfo/planetsInfo';
import PlanetList from '../planetList';
import RowBlock from '../rowBlock/rowBlock';

function PlanetsPage() {

    const [planetSelected, updatePlanetSelected] = useState(Number);

    const swService = new SwService();

    useEffect(() => {
        onPlanetSelected();
    })

    function onPlanetSelected(id) {
        updatePlanetSelected(id);
    }

    const planetsTable = (
            <PlanetList 
                className="item-list list-group"
                getData={swService.getAllPlanets}
                onPlanetSelected={onPlanetSelected}>
            </PlanetList>

    )

    const planetsInfo = (
        <PlanetsInfo 
            itemId={planetSelected}
            getData={swService.getPlanet}>
                <Field field='climate' label='Climate: ' />
                <Field field='population' label='Population: ' />
                <Field field='diameter' label='Diameter: ' />
                <Field field='gravity' label='Gravity: ' />                
                <Field field='orbital_period' label='Orbital period: ' />
                <Field field='residents' label='Residents: ' />
        </PlanetsInfo>
    )
    
    return (
        <RowBlock left={planetsTable} right={planetsInfo} />
    )
}

export default PlanetsPage;