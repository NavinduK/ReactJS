import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartPieSummary = ({latest})=>{

    const[chartData,setChartData]=useState("")
    useEffect(()=>{
        setChartData({
            labels:['Total Cases','Deaths','Recovered','Active Cases','New cases','Hospitalized'],
            datasets:[{
                label:'Cases',
                data:[
                    latest?.data?.local_total_cases,
                    latest?.data?.local_deaths,
                    latest?.data?.local_recovered,
                    latest?.data?.local_active_cases,
                    latest?.data?.local_new_cases,
                    latest?.data?.local_total_number_of_individuals_in_hospitals
                ],
                backgroundColor:[
                    '#EE4E5A',
                    '#CC36BF',
                    '#F7945D',
                    '#A9DBDA',
                    '#2076F5',
                    '#2A5673'
                    
                ],
                borderColor:'rgba(0,0,0,0)'
                
            }]
        })
    },[latest])
 
    return (
        <div  className="hospital-block" style={{width: '100%'}}>
                <h4 className="sub-heading bg-gray">Summary of current situation in Sri Lanka</h4>
                <div style={{padding:'1rem'}} className="chartPie bg-gray">
                    <div style={{width:'45%'}}>
                        <Doughnut
                            data={chartData}
                            width={'100%'}
                            height={'80%'}
                            
                            options={
                                {
                                    cutoutPercentage:'70',
                                    legend: {
                                        position: 'right',
                                        labels: {
                                            fontColor: '#2ABB53'
                                        }  
                                    }                                                                               
                                }
                            }
                        />
                    </div>
                </div>
        </div>
    );
}

export default ChartPieSummary;