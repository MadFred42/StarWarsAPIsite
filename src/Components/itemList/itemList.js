import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DotsBtn from '../dotsBtn/dotsBtn';
import Spinner from '../spinner';
import styled from 'styled-components';
import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';

const PlanetBody = styled.div`
`;

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

    function changePage(id) {

        if (!id || getData === swService.getResidents) {
            return
        }

        getData(`${id}`)
            .then(data => {
                updateList(data);
            })
    }

   
    // рендер персонажей на страницу
    function renderItems(arr) {
        return arr.map((item) => {
            const {id, climate, population, gender} = item;
            const label = item.name;
            // при условии полученных данных, планеты или персонади, будет рендериться нужная инфа 
            const itemDetails = !gender ? <PlanetInfo>Climate: {climate} / Population: {population}</PlanetInfo> : <PlanetInfo>Gender: {gender}</PlanetInfo>
            const url = !gender ? '/planets/' : '/residents/'
            
            return (
                <>
                <PlanetsList 
                    key={id}
                    className="list-group-item"
                    >
                        <NavLink style={{textDecoration:'none', color:'tomato'}} to={`${url}${id}`}>{label}</NavLink>
                        {itemDetails}
                </PlanetsList>
                </>
            )
        })  
    }

    //переменная, для того, чтобы точки не добавлялись на страницу с персонажами
    const res = planetList.find(item => item.gender);
    
    const items = renderItems(planetList);
    const spinner = planetList.length === 0 ? <Spinner /> : null;
    const dots = !res ? <DotsBtn getData={swService.getAllPages} changePage={changePage} /> : null;
    const btn = !res ? <BackButton link='/' props='1px 1px' /> : <BackButton link='/planets' props='10% 60%' />;

    return (
        <PlanetBody>
            <PlanetsTable className="item-list list-group">
                {spinner}                
                {items}
                {dots}
            </PlanetsTable>
            {btn}
        </PlanetBody>
    )
}

export default ItemList;