import React from 'react';
import CountryItem from './CountryItem';

const CountryList = ({countries, onCountryClick}) => {
    const countriesItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index} onCountryClick={onCountryClick} />
    })


    return (
        <div>
        <ul>
            {countriesItems}
        </ul>
        </div>
    )
}

export default CountryList;