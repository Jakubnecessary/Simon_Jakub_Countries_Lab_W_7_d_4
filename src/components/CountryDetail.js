import React from 'react';
import CountryContainer from '../containers/CountryContainer';


const CountryDetail = ({selectedCountry}) => {
    return (
        
        <div>
            <h3>Countries Name: {selectedCountry.name}</h3>
            <p>Countries Capital: {selectedCountry.capital}</p>
            <p>Countries Region: {selectedCountry.region}</p>
            <p>Amount of Countries ppl: {selectedCountry.population}</p>
        </div>
    )
}

export default CountryDetail;