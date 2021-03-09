import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Home.css';
import {CgDarkMode} from 'react-icons/cg'
const Home = () => {
    const [countries , setCountries]  = useState([]);
    const [dark, setDark] = useState(false);
    const theme = () => {
        setDark(!dark)
    }
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    return (
        <>
            <section className={dark ? 'bg-dark': 'bg-light'}>
                <button
                onClick ={theme}
                title={dark ? 'switch light mode' : 'switch dark mode'} className='darkMode'>
                <CgDarkMode style={{color: dark ? '#000' :'#fff'}}  className='dark-icon'/>
                </button>

                <section className="country-details-area">
                    {countries.map((country) => <Country dark = {dark} id={country.name} country={country} />)}
                </section>
                <p style={{color: dark ? '#fff' :'#000'}} className='copyright'>All right reserved <span>Shakil Babu</span></p>
            </section>
        </>
    )
}

export default Home
