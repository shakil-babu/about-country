import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CountryDetails.css';
import {CgDarkMode} from 'react-icons/cg';
const CountryDetails = (props) => {
    const {countryName} = useParams();
    const [countryData, setCountryData] = useState({});
    const [dark , setDark] = useState(false);
    
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountryData(data[0]))
    },[])
    const theme = () => {
        setDark(!dark)
    }

    const {flag, name,area, capital, demonym, population, nativeName} = countryData;
    return (        
        <>
           <section className={dark ? 'bg-dark': 'bg-light'}>
           <button
                onClick ={theme}
                title={dark ? 'switch light mode' : 'switch dark mode'} className='darkMode'>
                <CgDarkMode style={{color: dark ? '#000' :'#fff'}}  className='dark-icon'/>
            </button>
            <div style={{padding:'30px 0'}}>
            <section style={{backgroundColor: dark ? '#333':'#fff', color: dark ? '#fff' : '#000'}} className='country-area'>
                <div className="name-part">
                <h4 className='country-name'>About {countryName}</h4>
                <div className="underline"></div>
                </div>

                <div className="country-flag-area">
                    <img src={flag} alt=""/>
                    <h4>Name: {name}</h4>
                </div>
                <div className="info">
                    <p>Area: {area}</p>
                    <p>Capital: {capital}</p>
                    <p>Demonym: {demonym}</p>
                    <p>Population: {population}</p>
                    <p>NativeName: {nativeName}</p>
                </div>
        </section>
            </div>
           </section>
        </>
    )
}

export default CountryDetails
