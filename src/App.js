import React,{ useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import Global from './components/Global';
// import Local from './components/Local';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigator from './components/Navigator';
import Pills from './components/Pills';
import ChartPCR from './components/ChartPCR';
import HospitalDetails from './components/HospitalDetails';
import ChartPieSummary from './components/ChartPieSummary';
import Footer from './components/Footer';

const App = () => {

  const[latest, setLatest] = useState("");

  useEffect(()=>{
    axios
      .get("https://hpb.health.gov.lk/api/get-current-statistical")
      .then(res=>{
        setLatest(res.data);
      })
      .catch(err=>{
        console.log(err);
      });
  }, []);


  return(
    <div className="App">
        <Navigator/>
        <Pills latest={latest}/>
        <h3 className="main-heading bg-gray">Local Situational Analysis</h3>
        <ChartPCR latest={latest}/>
        {/* <HospitalDetails latest={latest}/> */}
        <ChartPieSummary latest={latest}/>
        <Footer latest={latest}/>
        

    </div>
  );
}

export default App;
