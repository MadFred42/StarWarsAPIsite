import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Resident = styled.li`
    width: 100%;
`;

const ResidentsTable = styled.ul`
    display: block;
    margin-left: auto;
    width: 600px;
    height: 100%;
`;

function ResidentsList({ planetData, getData }) {

    const [residents, updateRes] = useState([]);
    const [id, updateId] = useState();

    useEffect(() => {
        getRes();
    }, [residents]);
    
    console.log(planetData);
    console.log(residents);

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
            return (                
                <Resident className='d-flex justify-content-between'>
                    <span>{item}</span>
                </Resident>
            )
        });

        return res;
    }

    const res = renderResidents(residents);

    console.log(res);

    return(
        <ResidentsTable>
            <span className="term">Residents:</span>
            {res}
        </ResidentsTable>
    ); 
}

export default ResidentsList;