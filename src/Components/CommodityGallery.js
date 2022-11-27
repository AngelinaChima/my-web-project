import React from 'react';
import Commodity from '../Data';
import Commodity1 from '../Data1';
import Commodity2 from '../Data2';
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
                <div className = 'h-82 w-50 my-4 px-4 pt-4 shadow'>
                   <h4 className = "shadow-md">CATEGORIES</h4>

                   <div className = "my-4 py-4">
                    
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
                    
                        <h2 className='shadow p-4'>Explore Popular Brands</h2>
                        <div className='flex py-8 justify-evenly sm:flex-none'>{Popular.map((item) => {
                            return <img src = {item.url}
                            key = {item.id} alt = {item.name} />
                        })}</div>
                    
                    <div className=''>
                        <h2>Daily Deals</h2>
                        <div className='flex justify-evenly sm:flex-none'> {Commodity.map ((peg) =>
                        <CommodityItem 
                        key = {peg.id}
                        name = {peg.name}
                        url = {peg.url}
                        location = {peg.location}
                        price = {peg.price}
                        category = {peg.category}
                        />)}  </div>

                        <div className='flex justify-evenly sm:flex-none'> {Commodity1.map ((ped) =>
                        <CommodityItem 
                        key = {ped.id}
                        name = {ped.name}
                        url = {ped.url}
                        location = {ped.location}
                        price = {ped.price}
                        category = {ped.category}
                        />)}  </div>

                        <div className='flex justify-evenly sm:flex-none'> {Commodity2.map ((peb) =>
                        <CommodityItem 
                        key = {peb.id}
                        name = {peb.name}
                        url = {peb.url}
                        location = {peb.location}
                        price = {peb.price}
                        category = {peb.category}
                        />)}  </div>
                    </div>
                </div>
        </div>
    )
}

export default CommodityGallery;