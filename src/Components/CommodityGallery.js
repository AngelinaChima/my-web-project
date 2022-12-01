import React from 'react';
import Commodity from '../Data';
import {Link} from "react-router-dom";
import CommodityItem from '../Components/CommodityItem';
import Popular from "../Popular"
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
import sale from "../Images/sale.png";
import sell from "../Images/sell.png";




function CommodityGallery (){

    return(

        

        <div className='flex justify-evenly'>
                <div className = ' m-6 p-6 shadow w-40px'>
                   <h4 className = "shadow-md px-4">CATEGORIES</h4>

                   <div className = "pt-4">
                    
                        <div className='flex justify-between cursor'>
                        <img src = {vehicle} alt = "veh"/>
                            Vehicles
                    <Link to = "/"><img src = {chevron} alt = "chev"/></Link>
                        </div>
                     
                        <div className='flex justify-between'>
                        <img src = {Property} alt = "prop"/>
                            Property
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Electronics} alt = "Elect"/>
                            Electronics
                        <Link to = "/"><img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Jobs} alt = "Job"/> 
                            Jobs
                        <Link to = "/"><img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Appliance} alt = "Appl"/>
                        Home Appliances
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Sports} alt = "sprt"/>
                        Sports
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Games} alt = "game"/>
                        Games
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Beauty} alt = "Beauty"/>
                        Beauty & Health
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Foods} alt = "food"/>
                        Foods
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Fashion} alt = "fash"/>
                        Fashion
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Services} alt = "serv"/>
                        Services
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Kids} alt = "kids"/>
                        Kids
                        <Link to = "/"> <img src = {chevron} alt = "chev"/></Link>
                        </div>
                        
                   </div>
            
                </div>

                <div className=''>

                    <div className='flex justify-evenly sm:flex-none cursor'>
                            <div>
                           <Link to = "/"><img src = {sell} alt = "sell" /> </Link> 
                             </div>
                             <div>
                             <Link to = "/"><img src = {sale} alt = "Sale" /> </Link> 
                            </div>
                    </div>

                        <div className = 'flex p-4 justify-between'>
                        <h2 className=''>Explore Popular Brands</h2>
                       <Link to = "/"> <p className='text-xs text-red-700 cursor'>SEE ALL</p> </Link>
                        </div>

                        <div className='flex-wrap py-8 justify-evenly w-1/8 flex sm:flex-none '>{Popular.map((item) => {
                        return <img src = {item.url}
                        key = {item.id} alt = {item.name} />
                           })}   </div>
                    

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