import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    width: 50%;
    margin: 10px auto;
`;

const Dots = styled.div`
    width: 15px;
    height: 15px;   
    border-radius: 50%;
    background-color: #fff;
    margin: auto;
    cursor: pointer;
`;

function Slider({getData}) {
    
    const [pages, updatePages] = useState();

    useEffect(() => {
        getData()
            .then(data => {
                updatePages( data.count / 10 );
            })
    }, [getData]);

    console.log(pages);
    
    return(
        <Body>
            <Dots />
            <Dots />
            <Dots />
            <Dots />
            <Dots />
            <Dots />
        </Body>
    )
}

export default Slider;