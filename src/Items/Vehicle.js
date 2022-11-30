import React from 'react';
import honda from "../Images/Honda.png";
import Toyota from "../Images/Toyota.png";

 
function Vehicle() {
    return(
        
            <div className="">
               <img src = {honda} alt = "veh"/>
               <img src = {Toyota} alt = "veh"/>
               
            </div>
    
    )
}
export default Vehicle;