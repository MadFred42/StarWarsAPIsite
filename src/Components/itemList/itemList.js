import React, { useState, useEffect} from 'react';
import DotsBtn from '../dotsBtn/dotsBtn';
import Spinner from '../spinner';
import styled from 'styled-components';
import SwService from '../../Service/swService';
import BackButton from '../backButton/backButton';
import FilterItems from '../filterItems';

const PlanetsTable = styled.ul`
    height: 100%;
    width: 500px;
    text-align: center;
    cursor: pointer;   
    color: #fff;
`;

const PlanetInfo = styled.span`
    display: block;
    font-size: 15px;
`;

const PlanetsList = styled.li`
    font-size: 30px;
`;

function ItemList({ getData, getId, id }) {
    console.log(id);
    const [itemList, updateList] = useState([]);
    const [filter, updateFilter] = useState('all');
    
    const swService = new SwService();

    useEffect(() => {
        getData(id)
            .then(data => {
                updateList(data);
            })

        return () => changePage();
    }, [updateList]);

    useEffect(() => {
        onUpdateFilter();
    }, [])

    function changePage(id) {

        if (!id || getData === swService.getResidents) {
            return
        }

        getData(`${id}`)
            .then(data => {
                updateList(data);
            })
    }

    function onUpdateFilter(filter) {
        updateFilter(filter);
    }

    function onFilter(items, filter) {
       
        if (filter === 'males') {
            return items.filter(item => item.gender === 'male');             
        } else if (filter === 'females') {
            return items.filter(item => item.gender === 'female'); 
        } else {
            return items;
        }
    }

   
    // рендер персонажей на страницу
    function renderItems(arr) {
        return arr.map((item) => {
            const {id, climate, population, gender} = item;
            const label = item.name;
            // при условии полученных данных, планеты или персонади, будет рендериться нужная инфа 
            const planetShortInfo = <PlanetInfo>Climate: {climate} / Population: {population}</PlanetInfo>;
            const charShortInfo = <PlanetInfo>Gender: {gender}</PlanetInfo>
            const itemDetails = !gender ? planetShortInfo : charShortInfo;
            const url = !gender ? '/planets/' : '/residents/'
            
            return (
                <PlanetsList 
                    key={id}
                    className="list-group-item"
                    onClick={() => getId(id)}>  
                        <a
                            href={`${url}${id}`} 
                            className='btn' 
                            style={{color: 'tomato', fontSize: '25px'}}>
                                {label}</a>   
                        {itemDetails}
                </PlanetsList>
            )
        })  
    }

    //переменная, для того, чтобы точки не добавлялись на страницу с персонажами
    const res = itemList.find(item => item.gender);
    
    const items = renderItems(onFilter(itemList, filter));
    const spinner = itemList.length === 0 ? <Spinner /> : null;

    // const visiblePost = onFilter(itemList, filter);

    // console.log(visiblePost);

    const dots = !res ? 
        <DotsBtn 
            getData={swService.getAllPages} 
            changePage={changePage} /> : null;

    const filterContent = res ? 
        <FilterItems 
            filter={filter} 
            onUpdateFilter={onUpdateFilter} /> : null;

    const btn = !res ? 
        <BackButton 
            link='/' 
            props={{position: 'relative', top: '-900px', left: '670px'}} /> : 
                <BackButton 
                    link='/planets' 
                    props={{position: 'relative', top: '-900px', left: '670px'}} />;

    return (
        <>
            <PlanetsTable className="item-list list-group">
                {spinner}                
                {items}
                {dots}
            </PlanetsTable>
            {filterContent}
            {btn}
        </>
    )
}

export default ItemList;