import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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

function ItemList({ getData, onPlanetSelected }) {
    
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

        if (!id) {
            return
        }

        getData(`${id}`)
            .then(data => {
                updateList(data);
            })
    }

   

    function renderItems(arr) {
        return arr.map((item) => {
            const {id, climate, population} = item;
            const label = item.name;

            return (
                <PlanetsList 
                    key={id}
                    className="list-group-item"
                    onClick={() => onPlanetSelected(id)}>
                        <Link to={`/planets/${id}`}>{label}</Link>
                        <PlanetInfo>Climate: {climate} / Population: {population}</PlanetInfo>
                </PlanetsList>
            )
        })
    }

    const items = renderItems(planetList);
    const spinner = planetList.length === 0 ? <Spinner /> : null;

    return (
        <PlanetsTable className="item-list list-group">
            {spinner}
            {items}
            <DotsBtn 
                getData={swService.getAllPages}
                changePage={changePage} />
        </PlanetsTable>
    )
}

export default ItemList;