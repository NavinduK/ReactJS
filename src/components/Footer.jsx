import React from 'react';

const Footer = ({latest})=>{
    return (
        <div className="footer bg-gray">
            <h6>Last updated at: {latest.data?.update_date_time}</h6>
            <h6 >© 2020 Navindu Kavishka</h6>
        </div>
    );
}

export default Footer;