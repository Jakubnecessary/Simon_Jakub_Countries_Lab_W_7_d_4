import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelect';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    useEffect(() => {
        getCountries();
    }, [])


    const getCountries = function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }
    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    
    return (
        <div className='main-container'>
        <h2>Please Choose a country from Below</h2>

        <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
        </div>
)}

export default CountryContainer;
