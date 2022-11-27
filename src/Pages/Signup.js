import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';


function Signup (){

    

    return(
        <div>
            <Nav />
            
            <form>
                <div className='p-12 justify-center'>

                <div>
                <label>First Name</label>
                <input type = 'text' name = 'first name' className='w-20px h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <label>Middle Name</label>
                <input type = 'text' name = 'middle name' className='w-20px h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <label>Last Name</label>
                <input type = 'text' name = 'last name' className='w-20px h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <label>Email Address</label>
                <input type = 'email' name='email address'className='w-20px h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <input type ="submit" name='button' className = "w-20px h-35px bg-orange-500 border hover:text-blue-500 rounded-md "/>
                </div>
                
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Signup;