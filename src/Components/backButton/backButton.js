import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { goBack } from '../../actions';

function BackButton({ goBack }) {
    
    return (
        <Link to='/'>
            <button 
            className='btn btn-danger' style={{margin: '10px 50px', width: '150px'}}
            onClick={() => goBack()}>
                Back</button>
        </Link>
    )
}

const mapDispatchToProps = {
    goBack
}

export default connect(null, mapDispatchToProps)(BackButton);