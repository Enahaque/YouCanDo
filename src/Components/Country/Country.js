import React from 'react';

const Country = (props) => {
    const{name} = props.country;
    return (
        <div className='country-name'>
            <h3>name:{name.common}</h3>
            <h4>officialName:{name.official}</h4>
            
        </div>
    );
};

export default Country;