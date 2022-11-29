import React from 'react';
import Commodity from '../Data';
import Popular from '../Popular';
import {Link} from "react-router-dom";
import CommodityItem from '../Components/CommodityItem';
//import FaChevronRight from "react-icons/fa";
import vehicle from "../Images/Vehicle.png";
import Property from "../Images/Property.png";
import Electronics from "../Images/Electronics.png";
import Jobs from "../Images/Jobs.png";
import Appliance from "../Images/Appliance.png";
import Sports from "../Images/Sports.png";
import Games from "../Images/Games.png";
import Beauty from "../Images/Beauty.png";
import Foods from "../Images/Foods.png";
import Fashion from "../Images/Fashion.png";
import Services from "../Images/Services.png";
import Kids from "../Images/Kids.png";
import chevron from "../Images/chevron.png";




function CommodityGallery (){

    return(
        <div className='flex justify-evenly'>
                <div className = 'h-85 w-60 m-4 p-4 shadow'>
                   <h4 className = "shadow-md">CATEGORIES</h4>

                   <div className = "">
                    
                        <div className='flex justify-between'>
                        <img scr = {vehicle} alt = "veh"/>
                            Vehicles
                    <Link to = "Vehicles"><img scr = {chevron} alt = "chev"/></Link>
                        </div>
                     
                        <div className='flex justify-between'>
                        <img scr = {Property} alt = "prop"/>
                            Property
                        <Link to = "Property"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Electronics} alt = "Elect"/>
                            Electronics
                        <Link to = "Electronics"><img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Jobs} alt = "Job"/> 
                            Jobs
                        <Link to = "Jobs"><img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Appliance} alt = "Appl"/>
                        Home Appliances
                        <Link to = "Home Appliances"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Sports} alt = "sprt"/>
                        Sports
                        <Link to = "Sports"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Games} alt = "game"/>
                        Games
                        <Link to = "Games"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Beauty} alt = "Beauty"/>
                        Beauty & Health
                        <Link to = "Beauty & Health"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Foods} alt = "food"/>
                        Foods
                        <Link to = "Foods"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Fashion} alt = "fash"/>
                        Fashion
                        <Link to = "Fashion"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Services} alt = "serv"/>
                        Services
                        <Link to = "Services"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img scr = {Kids} alt = "kids"/>
                        Kids
                        <Link to = "Kids"> <img scr = {chevron} alt = "chev"/></Link>
                        </div>
                        
                   </div>
            
                </div>

                <div className=''>

                    <div className='flex'>

                        <div className='shadow p-6 m-6'>
                            <p className='text-xl'>How to <span className = 'text-orange-400'>buy</span> and <span className = 'text-orange-400'>sell</span> on iMarket</p>
                            <p className='text-sm'>Click here </p>
                            <Link to = "Home"> <img scr = {chevron} alt = "chev" /></Link>
                        </div>


                        <div>
                            
                        </div>



                    </div>
                        <div className = 'flex p-4 justify-between'>
                        <h2 className=''>Explore Popular Brands</h2>
                        <p className='text-xs text-red-700'>SEE ALL</p>
                        </div>
                        <div className='flex-wrap py-8 justify-evenly flex w-1/8  sm:flex-none'>{Popular.map((item) => {
                            return <img src = {item.url}
                            key = {item.id} alt = {item.name} />
                        })}</div>
                    
                    <div className=''>
                        <h2>Daily Deals</h2>
                        <div className='flex-wrap flex w-1/8 justify-evenly sm:flex-none'> {Commodity.map ((peg) =>
                        <CommodityItem 
                        key = {peg.id}
                        name = {peg.name}
                        url = {peg.url}
                        location = {peg.location}
                        price = {peg.price}
                        category = {peg.category}
                        />)}  </div>

                    </div>
                </div>
        </div>
    )
}

export default CommodityGallery;