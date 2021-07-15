import React, { useState, useEffect } from 'react';
import SwService from '../../Service/swService';
import ItemInfo, { Field } from '../ItemInfo';
import PlanetList from '../planetList';
import ResidentsList from '../residentsList';
import RowBlock from '../rowBlock/rowBlock';

function PlanetsPage() {

    const [planetSelected, updatePlanetSelected] = useState(Number);
    const [planetData, updatePlanetData] = useState([]);

    const swService = new SwService();

    useEffect(() => {
        onPlanetSelected();
    }, []);

    useEffect(() => {
        onResidentsSelected();
    }, []);

    function onPlanetSelected(id) {
        updatePlanetSelected(id);
    }

    function onResidentsSelected(url) {
        if (url === null) {
            return
        }
        updatePlanetData(url);
    }

    const planetList = (
            <PlanetList 
                className="item-list list-group"
                getData={swService.getAllPlanets}
                onPlanetSelected={onPlanetSelected}
                onResidentsSelected={onResidentsSelected}>
            </PlanetList>

    )

    const planetsInfo = (
        <ItemInfo 
            itemId={planetSelected}
            getData={swService.getPlanet}>
                <Field field='climate' label='Climate: ' />
                <Field field='population' label='Population: ' />
                <Field field='diameter' label='Diameter: ' />
                <Field field='gravity' label='Gravity: ' />                
                <Field field='orbital_period' label='Orbital period: ' />
                <ResidentsList 
                getData={swService.getResidents}
                planetData={planetData} />
        </ItemInfo>
    )
    
    return (
        <RowBlock left={planetList} right={planetsInfo} />
    )
}

export default PlanetsPage;