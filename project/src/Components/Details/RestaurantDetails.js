import React, { useState , useEffect} from 'react'
import Header from '../Common/Header'
import {Link, useParams} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../Styles/RestaurantDetails.css'

export default function RestaurantDetails() {
  //Hooks
  const [restaurant, setRestaurant] =useState({})
  let {rName} = useParams()
  //lifeCycle Hooks 
  useEffect( ()=>{
    fetch(`http://localhost:8080/zomato/restaurants/details/${rName}`,{method:'GET'})
    .then(response => response.json())
    .then(data => setRestaurant(data.data[0]))
  }, [] );

  const{name, thumb, cost, address, Cuisine} = restaurant
  const cuisineList =! (Cuisine==undefined) && Cuisine.length && <ul>{Cuisine.map(item=> <li key={item.name}>{item.name}</li>)}</ul>
  return (
    <div>
        <Header/> 
        <div className='image' >
            <img src={thumb} height='400px' width='80%' />
        </div>

        <div className='Rname'>
            <h1>{name}</h1>
        </div>

        <div className='tabs'>
          <Tabs>
            <TabList>
              <Tab className={'tab'}>Overview</Tab>
              <Tab className={'tab'}>Contact</Tab>
            </TabList>

            <TabPanel>
              <div className='about'>About the place</div>
              <div className='head'>Cuisine</div>
              {cuisineList}
              <div className='head'>Average cost</div>
              <div className='value'>&#8377; {cost}</div>
            </TabPanel>
            
            <TabPanel>
              <div className="head">Phone Number</div>
              <div>+91-12345678</div>
              <div className="head">{name}</div>
              <div className="value">{address}</div>
            </TabPanel>
          </Tabs>
        </div>
        
    </div>
  )
}
