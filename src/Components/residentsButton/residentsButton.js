import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPlanet } from '../../actions';

const ResidentsButton = ({ getPlanet, name, planet }) => {
    
    return (
        <Link to={`/planet/${name}/residents`} style={{textDecoration: 'none'}}>
            <button 
            className='show btn btn-primary' 
            style={{margin: 'auto', width: '300px', borderRadius: '30px'}}
            onClick={() => getPlanet(planet)}>
                See residents</button>
        </Link> 
    )
};

const mapDispatchToProps = {
    getPlanet
}


export default connect(null, mapDispatchToProps)(ResidentsButton);
