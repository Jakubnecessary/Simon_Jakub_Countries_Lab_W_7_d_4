import React from 'react';


const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
    
    const countryOptions = countries.map((country, index) => {
    return <option value={index} key={index}>{country.name}</option>
    })
    return (
        <select defaultValue={"default"} onChange={handleChange}>
            <option value="default">Choose a Country</option>
            {countryOptions}
        </select>
    )
}
export default CountrySelector;