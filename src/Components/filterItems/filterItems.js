import React from 'react';
import styled from 'styled-components';

const FilterBtn = styled.button`
    position: relative;
    top: -1000px;
    left: 600px
`;

function FilterItems({ filter, onUpdateFilter }) {

    console.log(filter);
    
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'males', label: 'Males'},
        {name: 'females', label: 'Females'}
    ];

    const content = buttons.map(({name, label}) => {
        const active = filter === name;
        const clss = active ? 'btn-info' : 'btn-secondary';

        return (    
            <FilterBtn
                key = {name}
                className={`btn ${clss}`}
                onClick={() => onUpdateFilter(name)}>
                    {label}</FilterBtn>
        )
    })

    return (
        <div className="align-items-center d-flex">
            {content}
        </div>
    )
}

export default FilterItems;