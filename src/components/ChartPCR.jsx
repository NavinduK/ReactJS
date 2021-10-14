import React,{useState,useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';

const ChartPCR = ({latest})=>{
    const[chartData,setChartData]=useState("")

    useEffect(()=>{
        setChartData({
            labels:[
                    latest?.data?.daily_pcr_testing_data[20].date,
                    latest?.data?.daily_pcr_testing_data[19].date,
                    latest?.data?.daily_pcr_testing_data[18].date,
                    latest?.data?.daily_pcr_testing_data[17].date,
                    latest?.data?.daily_pcr_testing_data[16].date,
                    latest?.data?.daily_pcr_testing_data[15].date,
                    latest?.data?.daily_pcr_testing_data[14].date,
                    latest?.data?.daily_pcr_testing_data[13].date,
                    latest?.data?.daily_pcr_testing_data[12].date,
                    latest?.data?.daily_pcr_testing_data[11].date,
                    latest?.data?.daily_pcr_testing_data[10].date,
                    latest?.data?.daily_pcr_testing_data[9].date,
                    latest?.data?.daily_pcr_testing_data[8].date,
                    latest?.data?.daily_pcr_testing_data[7].date,
                    latest?.data?.daily_pcr_testing_data[6].date,
                    latest?.data?.daily_pcr_testing_data[5].date,
                    latest?.data?.daily_pcr_testing_data[4].date,
                    latest?.data?.daily_pcr_testing_data[3].date,
                    latest?.data?.daily_pcr_testing_data[2].date,
                    latest?.data?.daily_pcr_testing_data[1].date,
                    latest?.data?.daily_pcr_testing_data[0].date,
                ],
            datasets:[{
                barThickness:'20',
                label:'Tests',
                data:[
                    latest?.data?.daily_pcr_testing_data[20].pcr_count,
                    latest?.data?.daily_pcr_testing_data[19].pcr_count,
                    latest?.data?.daily_pcr_testing_data[18].pcr_count,
                    latest?.data?.daily_pcr_testing_data[17].pcr_count,
                    latest?.data?.daily_pcr_testing_data[16].pcr_count,
                    latest?.data?.daily_pcr_testing_data[15].pcr_count,
                    latest?.data?.daily_pcr_testing_data[14].pcr_count,
                    latest?.data?.daily_pcr_testing_data[13].pcr_count,
                    latest?.data?.daily_pcr_testing_data[12].pcr_count,
                    latest?.data?.daily_pcr_testing_data[11].pcr_count,
                    latest?.data?.daily_pcr_testing_data[10].pcr_count,
                    latest?.data?.daily_pcr_testing_data[9].pcr_count,
                    latest?.data?.daily_pcr_testing_data[8].pcr_count,
                    latest?.data?.daily_pcr_testing_data[7].pcr_count,
                    latest?.data?.daily_pcr_testing_data[6].pcr_count,
                    latest?.data?.daily_pcr_testing_data[5].pcr_count,
                    latest?.data?.daily_pcr_testing_data[4].pcr_count,
                    latest?.data?.daily_pcr_testing_data[3].pcr_count,
                    latest?.data?.daily_pcr_testing_data[2].pcr_count,
                    latest?.data?.daily_pcr_testing_data[1].pcr_count,
                    latest?.data?.daily_pcr_testing_data[0].pcr_count
                ],
                backgroundColor: 'rgb(47,192,83)',
                borderColor:'#2ABB53'
            }]
        })
    },[latest])
 
        return (
            <div  className="hospital-block" style={{width: '100%'}}>
                <h4 className="sub-heading bg-gray">Number of PCR test taken in last 20 days</h4>
                <div style={{padding:'1rem'}} className="chartPCR bg-gray">
                
                <Bar
                    data={chartData}
                    width={'100%'}
                    height={'35%'}
                    
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
                                        fontColor: "#2ABB53"
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color:'rgba(100,100,100,0.2)'
                                    },
                                    ticks: {
                                        fontColor: "#2ABB53"
                                    }
                                }]
                            }
                        }
                    }
                />
                </div>
            </div>
        );
        }


export default ChartPCR;