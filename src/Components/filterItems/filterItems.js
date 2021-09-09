import React from 'react';
import { connect } from 'react-redux';
import { filterItems } from '../../actions';


function FilterItems({ filterActive, filterItems }) {
    
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'male', label: 'Males'},
        {name: 'female', label: 'Females'}
    ];

    const content = buttons.map(({ name, label }) => {
        const active = filterActive === name;
        const classTag = active ? 'btn-info' : 'btn-secondary';

        return (    
            <button
                key = {name}
                className={`btn ${classTag}`}
                onClick={() => filterItems(name)}>
                    {label}</button>
        )
    })

    return (
        <div className="align-items-center d-flex" style={{position: 'absolute', top: '10px', right: '100px'}}>
            {content}
        </div>
    )
}

const mapStateToProps = ({ filterActive, residents }) => {
    return {
        filterActive,
        residents
    }
}

const mapDispatchToProps = {
    filterItems
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);