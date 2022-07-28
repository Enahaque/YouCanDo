import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const[countries,setCountries]=useState([]);
    useEffect( () =>{
        const url = `https://restcountries.com/v3.1/all`;
        

        console.log(url);// console.log 2 time;

            fetch(url)
                .then(res => res.json())
                .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h3>This is my Country!! : {countries.length}</h3>
            {/* {
                countries.map(country => <Country
                key={country.id}
                country={country}
                
                ></Country>)
            } */}
            {
                countries.map(country=><ul>
                    <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                </ul>)
            }
        </div>
    );
};

export default Countries;