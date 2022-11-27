import React from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
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
            <div className='p-12 justify-center'>
                <form>

                <div>
                <label>Username</label>
                <input type = 'text' name='username'className='w-20px h-35 border rounded-md shadow' required/>   
                </div>

                <div>
                <label>Password</label>
                <input type = 'password' name='password'className='w-20px h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <input type ="submit" name='button' className = "cursor text-white w-30px h-35px bg-orange-500 border hover:text-blue-500 rounded-md "/>
            </div>

                </form>
            </div>
            <Footer />
        </div>

    );
}

export default Login;