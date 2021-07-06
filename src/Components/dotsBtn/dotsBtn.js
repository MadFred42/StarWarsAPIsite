import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
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
    background-color: white;
    margin: auto;
    cursor: pointer;
`;

function DotsBtn({ getData, changePage }) {

    const [page, updatePage] = useState(Number);

    useEffect(() => {
        getData()
            .then(data => {
                updatePage(data);
            });
    }, [getData]);


    function btns(num) {
        let buttons = [];
        for (let i = 1; i <= num; i++) {
            buttons.push(
            <Dots 
                key={i}
                onClick={() => changePage(i)} />)
        }
        
        return buttons;
    }

    const spinner = page === 0 ? <Spinner /> : null;
    const items = btns(page);

    return (
        <Body>
            {spinner}
            {items}
        </Body>
    )
}

export default DotsBtn;