import React from 'react';

const HospitalDetails = ({latest})=>{
    const dataH = latest?.data;
    console.log(latest?.data?.hospital_data[1].treatment_total);
    var maxHospitals = new Array(8);
    //var tempMax = dataH?.hospital_data[0].treatment_total;
    console.log(maxHospitals);
    var j=0;
    for(var i=0;i<dataH?.hospital_data.length;i++){
        if(dataH?.hospital_data[i].treatment_total>=2 && j<=7){
            maxHospitals[j]=i;
            j++;
        }
    }

    return (
        <div className="center-text hospital-block">
            <h3 className="sub-heading bg-gray">Details of selected hospitals in Sri Lanka</h3>
            <div className="hospitals-container ">
                <div className="hospital bg-gray">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[0]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[0]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[0]].cumulative_total}</h6>
                    </div>
                </div>
                <div className="hospital">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[1]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[1]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[1]].cumulative_total}</h6>
                    </div>
                </div>
            </div>
            <div className="hospitals-container">
                <div className="hospital">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[2]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[2]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[2]].cumulative_total}</h6>
                    </div>
                </div>
                <div className="hospital">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[3]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[3]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[3]].cumulative_total}</h6>
                    </div>
                </div>
            </div>
            <div className="hospitals-container">
                <div className="hospital ">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[4]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[4]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[4]].cumulative_total}</h6>
                    </div>
                </div>
                <div className="hospital">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[5]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[5]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[5]].cumulative_total}</h6>
                    </div>
                </div>
            </div>
            <div className="hospitals-container">
                <div className="hospital">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[6]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[6]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[6]].cumulative_total}</h6>
                    </div>
                </div>
                <div className="hospital">
                    <div className="hospital-preview ">
                        <h5>{dataH?.hospital_data[maxHospitals[7]].hospital.name}</h5>
                    </div>
                    <div className="hospital-info">
                        <h6>Current Patients: {dataH?.hospital_data[maxHospitals[7]].treatment_total}</h6>
                        <h6>Total Admitted: {dataH?.hospital_data[maxHospitals[7]].cumulative_total}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HospitalDetails;