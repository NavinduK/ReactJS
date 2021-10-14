import React from 'react';
import covid from './images/covid.png';
import world from './images/world.png';

const Navigator = ({props}) => {

    return (
        <div>
            <nav style={{height: '5rem'}} className="round-corners navbar  navbar-dark bg-gray">
                <img className="covid-image" width={'65rem'} alt={'Covid virus'} src={covid}/>
                <div className="justify-content-center">
                    <h3>COVID-19 : Live Situational Analysis Dashboard</h3>
                </div>
                <img className="world-image" width={'65rem'} alt={'Globe'} src={world}/>
            </nav>
        </div>
    );
}

export default Navigator;