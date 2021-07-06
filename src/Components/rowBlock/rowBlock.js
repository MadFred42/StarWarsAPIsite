import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='8'>
                {left}
            </Col>
            <Col md='4'>
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;