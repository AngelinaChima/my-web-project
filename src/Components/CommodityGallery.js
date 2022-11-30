import React from 'react';
import Commodity from '../Data';
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
import sale from "../Images/sale.png";
import sell from "../Images/sell.png";
import Toyota from "../Images/Toyota.png";
import Samsung from "../Images/Samsung.png";
import Nivea from "../Images/Nivea.png";
import Adidas from "../Images/Adidas.png";
import Apple from "../Images/Apple.png";
import Honda from "../Images/Honda.png";
//import Vehicle from '../Items/Vehicle';




function CommodityGallery (){

    return(

        

        <div className='flex justify-evenly'>
                <div className = ' m-6 p-6 shadow w-40px'>
                   <h4 className = "shadow-md px-4">CATEGORIES</h4>

                   <div className = "pt-4">
                    
                        <div className='flex justify-between'>
                        <img src = {vehicle} alt = "veh"/>
                            Vehicles
                    <Link to = "Vehicles"><img src = {chevron} alt = "chev"/></Link>
                        </div>
                     
                        <div className='flex justify-between'>
                        <img src = {Property} alt = "prop"/>
                            Property
                        <Link to = "Property"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Electronics} alt = "Elect"/>
                            Electronics
                        <Link to = "Electronics"><img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Jobs} alt = "Job"/> 
                            Jobs
                        <Link to = "Jobs"><img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Appliance} alt = "Appl"/>
                        Home Appliances
                        <Link to = "Home Appliances"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Sports} alt = "sprt"/>
                        Sports
                        <Link to = "Sports"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Games} alt = "game"/>
                        Games
                        <Link to = "Games"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Beauty} alt = "Beauty"/>
                        Beauty & Health
                        <Link to = "Beauty & Health"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Foods} alt = "food"/>
                        Foods
                        <Link to = "Foods"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Fashion} alt = "fash"/>
                        Fashion
                        <Link to = "Fashion"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Services} alt = "serv"/>
                        Services
                        <Link to = "Services"> <img src = {chevron} alt = "chev"/></Link>
                        </div>

                        <div className='flex justify-between'>
                        <img src = {Kids} alt = "kids"/>
                        Kids
                        <Link to = "Kids"> <img src = {chevron} alt = "chev"/></Link>
                        </div>
                        
                   </div>
            
                </div>

                <div className=''>

                    <div className='flex justify-evenly sm:flex-none'>
                            <div>
                             <img src = {sell} alt = "sell" /> 
                             </div>
                             <div>
                            <img src = {sale} alt = "sale" /> 
                            </div>
                    </div>

                        <div className = 'flex p-4 justify-between'>
                        <h2 className=''>Explore Popular Brands</h2>
                        <p className='text-xs text-red-700 cursor'>SEE ALL</p>
                        </div>

                        <div className=' justify-evenly flex sm:flex-none cursor'>

                         <div>
                       <Link to = ""> <img src = {Toyota} alt = "car" /> </Link>
                        </div>

                        <div>
                            <img src = {Samsung} alt = "phone" />
                            <p className='pl-6 font-medium'>Samsung</p>
                        </div>

                        <div>
                            <img src = {Nivea} alt = "lotion" />
                            <p className='pl-9 font-medium'>Lotion</p>
                        </div>

                        <div>
                            <img src = {Adidas} alt = "sneaker" />
                            <p className='pl-7 font-medium'>Sneaker</p>
                        </div>

                        <div>
                            <img src = {Apple} alt = "phone" />
                            <p className='pl-7 font-medium'>I Phone</p>
                        </div>

                        <div>
                            <img src = {Honda} alt = "car" />
                            <p className='pl-9 font-medium'>Honda</p>
                        </div>

                        </div>
                    

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