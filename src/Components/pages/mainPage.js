import React from 'react';
import PlanetList from '../planetList';

function MainPage() {
    
    return (
        <div>
            <h1 style={{height: '70px', color: '#ff85fb'}}>Choose any planet you want.</h1>
            <h1 style={{position: 'absolute', right: '30px', top: '0', color: '#ff85fb'}}>Welcome to the Star Wars API</h1>
            <PlanetList />
        </div>
    )
}

export default MainPage;