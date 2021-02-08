import { render } from '@testing-library/react'
import React, { useState } from 'react'
import './Contact.css'
{/* We have passed data from json to contacts which in turn is passed to component Contacts,
Here, we put an input for user to enter country name, initiate an event listener to get the value,
then filter the list of countries and output only the universities name of that particlar country .
We have changed the value input by user to lowecase as a way to prevent error since in the api the countries are in lower letter. */}
function Contacts({contacts}){
  const [search,setSearch]= useState (" ");

      return (
          <div className= "all">
            <header> </header>
            <p className="countryName">Enter Country name :
            <input className="searchBar"
            type="text"
            placeholder="search..."
            onChange={(event) =>{
              setSearch(event.target.value)
            }}/></p>
            <div className="result">
            {contacts.filter((val)=>{
              if (search==""){
                return val
              console.log("no result")}
                else if (val.country.toLowerCase().includes(search.toLowerCase())){
                  return val
                }}).map((val,key)=>{
                  return (
                   
                    <div className="name">
                      
                      {val.name}</div>

                    
                  )
                })
              }
              </div>
 
          </div>
      )
  };
  
 

export default Contacts