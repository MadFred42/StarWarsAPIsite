import React from 'react';
import BackButton from '../backButton';
import FilterItems from '../filterItems';
import ResidentsList from '../residentsList';

function ResidentsPage({match}) {
    const { id } = match.params
    return (
        <div>
            <BackButton />  
            <span style={{position: 'absolute', color: 'white', top: '0', left: '800px', fontSize: '50px'}}>{id}</span>
            <FilterItems />
            <ResidentsList />
        </div>
    )
}

export default ResidentsPage;