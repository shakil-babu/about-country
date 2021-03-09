import React from 'react'
import { Link } from 'react-router-dom';
import './Country.css';
const Country = ({country, dark}) => {
    console.log(country);
    return (
        <>
            
            <div className="country-details">
                <img src={country.flag} alt=""/>
                <h5 style={{color:dark ? '#fff' : '#000'}}>{country.name}</h5>
                <p style={{color:dark ? '#fff' : '#000'}}>Population: {country.population}</p>
                
                <Link to={'/details/'+country.name} >
                <button className="btn">More Details</button>
                </Link>
            </div>
            
        </>
    )
}

export default Country
