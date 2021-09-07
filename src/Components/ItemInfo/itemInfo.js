import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';

const Field = ({planet, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{planet[field]}</span>
        </li>
    )
}

export {Field};

function ItemInfo ({ getData, itemId, children }) {
    
    const [planet, getPlanet] = useState([]);

    useEffect(() => {
        updatePlanet();
    }, [itemId]);

    function updatePlanet() {
        if (!itemId) {
            return
        }

        getData(itemId)
            .then(item => {
                getPlanet(item);
            })
    }

    const {name} = planet;
    const content = planet.length === 0 ? <Spinner/> : null

    return (
        
        <div className="rounded">
            {content}
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {planet});
                    })
                }
            </ul>
        </div>
    )
}

export default ItemInfo;