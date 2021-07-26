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
    margin: auto;
    border-radius: 50%;
    background-color: tomato;
    cursor: pointer;
`;

function DotsBtn({ getData, changePage }) {

    const [page, updatePage] = useState(Number);

    useEffect(() => {
        getData()
            .then(data => {
                updatePage(data);
            });
    }, []);


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