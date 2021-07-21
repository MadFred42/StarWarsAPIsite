import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResidentsTable = styled.ul`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
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



function ResidentsList({ data, getData, onCharSelected }) {

    const [residents, updateRes] = useState([]);
    
    console.log(data);
    useEffect(() => {
        getRes();
    }, [getData]);

    function getRes() {
        
        if (!data) {
            return
        }

        getData(data)
            .then(item => {
                updateRes(item);
            })
    }

    function renderResidents(arr) {
        
        if (arr === null) {
            return
        }
        
        const res = arr.map(item => {
            const {name, id} = item;
            return (                
                <Resident
                key={id}
                className='justify-content-between'
                onClick={() => onCharSelected(id)}>
                    <Link to={`people/${id}`}>{name}</Link>
                </Resident>
            )
        });

        return res;
    }

    const res = renderResidents(residents);

    console.log(res);

    return(
        <ResidentsTable className='item-list list-group'>
            <Label className="term">Residents</Label>
            {res}
        </ResidentsTable>
    ); 
}

export default ResidentsList;