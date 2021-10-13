import React from 'react';
import Global from './Global';
import Local from './Local';
import ChartGlobalTotal from './ChartGlobalTotal';
import ChartGlobalNew from './ChartGlobalNew';
import ChartLocalTotal from './ChartLocalTotal';
import ChartLocalNew from './ChartLocalNew';

const Pills = ({latest}) => {
    return (
        <div>
            <div className="tabs" style={{margin:'1.5%'}}>
                <div className="tab-2">
                    <label htmlFor="tab2-1"><h4>Global Situation</h4></label>
                    <input id="tab2-1" name="tabs-two" type="radio" defaultChecked="checked" />
                    <div>
                        <Global latest={latest}/>
                        <div className="chart-phills">
                            <ChartGlobalTotal className="chart-flex" latest={latest}/>
                            <ChartGlobalNew latest={latest}/>
                        </div>
        
                    </div>
                </div>
                <div className="tab-2">
                    <label htmlFor="tab2-2"><h4>Local Situation</h4></label>
                    <input id="tab2-2" name="tabs-two" type="radio" />
                    <div>
                        <Local latest={latest}/>
                        <div className="chart-phills">
                            <ChartLocalTotal latest={latest}/>
                            <ChartLocalNew latest={latest}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pills;