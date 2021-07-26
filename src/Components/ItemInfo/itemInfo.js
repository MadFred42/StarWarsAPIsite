import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import styled from 'styled-components';

const PlanetDetail = styled.div`
    align-self: center;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin: auto;
    width: 600px;
    height: 600px;
`;

const Head = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Field = ({newId, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{newId[field]}</span>
        </li>
    )
}

export {Field};

function ItemInfo ({ getData, itemId, children }) {
    
    const [newId, updateId] = useState([]);

    useEffect(() => {
        updatePlanet();
    }, [itemId]);

    function updatePlanet() {
        if (!itemId) {
            return
        }

        getData(itemId)
            .then(item => {
                updateId(item);
            })
    }

    const {name} = newId;
    console.log(newId);
    const content = newId.length === 0 ? <Spinner/> : null

    return (
        
        <PlanetDetail className="rounded">
            {content}
            <Head>{name}</Head>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {newId});
                    })
                }
            </ul>
        </PlanetDetail>
    )
}

export default ItemInfo;