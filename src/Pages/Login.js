import React from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Header1 from './header1';
import {Link} from "react-router-dom";
//import { useState } from "react";



function Login () {

    //const [errorMessages, setErrorMessages] = useState({});
  //const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  //const database = [
//{
     // username: "user1",
      //password: "pass1"
//},
    //{
     // username: "user2",
     // password: "pass2"
   // }
  //];

  //const errors = {
   // username: "invalid username",
   // password: "invalid password"
  //};

 // const handleSubmit = (event) => {
    //Prevent page reload
   // event.preventDefault(); 

   // var { username, password } = document.forms[0];

    // Find user login info
//const userData = database.find((user) => user.username === username.value);

    // Compare user info
   // if (userData) {
     // if (userData.password !== password.value) {
        // Invalid password
       // setErrorMessages({ name: "password", message: errors.password });
      //} else {
        //setIsSubmitted(true);
     // }
    //} else {
      // Username not found
      //setErrorMessages({ name: "username", message: errors.username });
//}
  //};

  // Generate JSX code for error message
  //const renderErrorMessage = (name) =>
    //name === errorMessages.name && (
      //<div className="error">{errorMessages.message}</div>
    //);


    //                <form onSubmit={handleSubmit}> , {renderErrorMessage("username")}
return (

       <div>
          <Nav />
          <Header1 />

            <div>
                <form className='p-14'>

                <div>
                <label>Username</label>
                <input type = 'text' name='username'className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' required/>   
                </div>

                <div>
                <label>Password</label>
                <input type = 'password' name='password'className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' required/>
                </div>

                <div className='flex space-x-6'>
                <input type ="submit" name='button' className = "cursor text-white w-30px h-35px bg-orange-500 border hover:text-blue-500 rounded-md cursor "/>
               <Link to = "Home"> <p> Forgot Password?</p> </Link>

            </div>

                </form>
            </div>
            <Footer />
        </div>

    );
}

export default Login;