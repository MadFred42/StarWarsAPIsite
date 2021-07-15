import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ResidentsTable = styled.ul`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
`;

const Resident = styled.li`
    float: right;
    clear: right;
    list-style-type: none;
    cursor: pointer;
`;

const Label = styled.span`
    margin: 0 15px;
`;



function ResidentsList({ planetData, getData }) {

    const [residents, updateRes] = useState([]);
    const [id, updateId] = useState();

    useEffect(() => {
        getRes();
    }, [getData]);

    function getRes() {
        
        if (!planetData) {
            return
        }

        getData(planetData)
            .then(item => {
                updateRes(item);
            })
    }

    function renderResidents(names) {
        
        if (names === null) {
            return
        }
        
        const res = names.map(item => {
            const {name, id} = item;
            return (                
                <Resident
                key={id}
                className='justify-content-between'>
                    {name}
                </Resident>
            )
        });

        return res;
    }

    const res = renderResidents(residents);

    console.log(res);

    return(
        <ResidentsTable className='item-list list-group'>
            <Label className="term">Residents:</Label>
            {res}
        </ResidentsTable>
    ); 
}

export default ResidentsList;