import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DotsBtn from '../dotsBtn/dotsBtn';
import Spinner from '../spinner';
import styled from 'styled-components';
import SwService from '../../Service/swService';

const PlanetsTable = styled.ul`
    width: 500px;
    text-align: center;
    cursor: pointer;   
    color: #fff;
`;

const PlanetInfo = styled.span`
    display: block;
    font-size: 20px;
`;

const PlanetsList = styled.li`
    font-size: 30px;
`;

function ItemList({ getData }) {
    
    const [planetList, updateList] = useState([]);

    const swService = new SwService();

    useEffect(() => {
        getData(1)
            .then(data => {
                updateList(data);
            })

        return () => changePage();
    }, []);

    console.log(planetList);

    function changePage(id) {

        if (!id || getData === swService.getResidents) {
            return
        }

        getData(`${id}`)
            .then(data => {
                updateList(data);
            })
    }

   

    function renderItems(arr) {
        return arr.map((item) => {
            const {id, climate, population, gender} = item;
            const label = item.name;

            const itemDetails = !gender ? <PlanetInfo>Climate: {climate} / Population: {population}</PlanetInfo> : <PlanetInfo>Gender: {gender}</PlanetInfo>

            return (
                <PlanetsList 
                    key={id}
                    className="list-group-item"
                    >
                        <NavLink style={{textDecoration:'none', color:'tomato'}} to={`/planets/${id}`}>{label}</NavLink>
                        {itemDetails}
                </PlanetsList>
            )
        })  
    }
    console.log(typeof(getData));
    const items = renderItems(planetList);
    const spinner = planetList.length === 0 ? <Spinner /> : null;
    const dots = getData === !swService.getResidents ? <DotsBtn getData={swService.getAllPages} changePage={changePage} /> : null;

    return (
        <PlanetsTable className="item-list list-group">
            {spinner}
            {items}
            {dots}
        </PlanetsTable>
    )
}

export default ItemList;