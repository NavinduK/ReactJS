import React,{useState,useEffect} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const ChartLocalTotal = ({latest})=>{

 const[chartData,setChartData]=useState("")

    useEffect(()=>{
        setChartData({
            labels:['Total Cases','Deaths','Recovered'],
            datasets:[{
                label:'Cases',
                data:[
                    latest?.data?.local_total_cases,
                    latest?.data?.local_deaths,
                    latest?.data?.local_recovered
                ],
                backgroundColor:[
                    '#FFBB00',
                    '#FF2D26',
                    '#2E7CF1'
                ]
            }]
        })
    },[latest])
 
        return (
            <div  className="chart-margin bg-gray" style={{width: '50%'}}>
                <HorizontalBar
                    data={chartData}
                    width={'100%'}
                    height={'25%'}
                    
                    options={
                        {
                            legend: {
                            display: false},
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color:'rgba(100,100,100,0.2)'
                                    },
                                    ticks: {
                                        fontColor: "#2ABB53", 
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color:'rgba(100,100,100,0.2)'
                                    },
                                    ticks: {
                                        fontColor: "#2ABB53", 
                                    }
                                }]
                            }
                        }
                    }
                />
            </div>
        );
        }


export default ChartLocalTotal;