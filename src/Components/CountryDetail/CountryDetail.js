import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const{countryName}= useParams();//dynamic route;
    return (
        <div className='country-name'>
            <h3>This is the country of:{countryName} </h3>
        </div>
    );
};

export default CountryDetail;