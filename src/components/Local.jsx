import React from 'react';

const Local = ({latest}) => {
        return (
            <div>
                <div className="section-top center-text">
                    <div className="card bg-gray mb-3 tx-orange" style={{width: '25%', margin:'0.2% 0.2% 0.2% 0'}}>
                        <div className="card-header"><h3>Total Cases</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">{latest.data?.local_total_cases}</h2>
                            
                        </div>
                    </div>

                    <div className="card bg-gray mb-3 tx-violet" style={{width: '25%', margin:'0.2%'}}>
                        <div className="card-header"><h3>New Cases</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">{latest.data?.local_new_cases}</h2>
                            
                        </div>
                    </div>

                    <div className="card bg-gray mb-3 tx-red" style={{width: '25%', margin:'0.2%'}}>
                        <div className="card-header"><h3>Deaths</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">{latest.data?.local_deaths}</h2>
                            
                        </div>
                    </div>

                    <div className="card bg-gray mb-3 tx-green" style={{width: '25%', margin:'0.2% 0 0.2% 0.2%'}}>
                        <div className="card-header"><h3>Recovered</h3></div>
                        <div className="card-body">
                            <h2 className="card-title">{latest.data?.local_recovered}</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Local;