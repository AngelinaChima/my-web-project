import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Header2 from './Header2';
//import {useState} from "react";


function Signup (){

           // const {register, formState: {errors},} = useState();
           // const onSubmit = (data) => console.log(data);
            
           

    //const [FirstName, setFirstName] = useState(null);
    //const [MiddleName, setMiddleName] = useState(null);
    //const [LastName, setLastName] = useState(null);
    //const [Email, setEmail] = useState(null);
   // const [PhoneNumber, setPhoneNumber] = useState(null);
    //const [Password,setPassword] = useState(null);
   // const [ConfirmPassword,setConfirmPassword] = useState(null);

   // const handleInputChange = (e) => {

       // const {id , value} = e.target;
       // if(id === "FirstName"){
       //     setFirstName(value);
       // }
       // if(id === "MiddleName"){
        //    setMiddleName(value);
      //  }
     //   if(id === "lastName"){
     //       setLastName(value);
//}
//   if(id === "email"){
//    setEmail(value);
    //    }
    //    if(id === "MiddleName"){
      //      setPhoneNumber(value);
//}
   //     if(id === "password"){
   //         setPassword(value);
   //     }
   //     if(id === "confirmPassword"){
    //        setConfirmPassword(value);
    //    }

   //     const handleSubmit  = () => {
    //        console.log(FirstName,LastName,Email,Password,ConfirmPassword);
    //    }

    //  <form onSubmit = {handleSubmit(onSubmit)}>

   // <error>
   // {errors.FirstName?.type === "required" && "FirstName is required"}
       // </error>

       // note

       //  {...register("FirstName", {required: true})} value={FirstName} onChange = {(e) =>  handleInputChange(e)} id = "FirstName"

       //{...register("Number", {minLength: 11, maxLength: 14,})} value={PhoneNumber} onChange = {(e) => handleInputChange(e)} id="Number"

        // <error>
      //  {errors.Number?.type === "minLength" && "Number is incomplete"}
//{errors.Number?.type === "maxLength" && "Number is incomplete"}
   // </error>

    return(
        <div>
            <Nav />

            <Header2 />

           
                
            <form >
            <div className='p-14'>

                <div>
                <label>First Name</label>
                <input type = 'text' name = 'First Name' className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow'/>
                </div>

                <div>
                <label>Middle Name</label>
                <input type = 'text' name = 'middle name' className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' required/>
                </div>
    

                <div>
                <label>Last Name</label>
                <input type = 'text' name = 'last name' className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow'required />
                </div>

                <div>
                <label>Email Address</label>
                <input type = 'email' name='email address'className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <label>Phone Number</label>
                <input type = 'number' name='number'className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <label>Password</label>
                <input type = 'password' name='password'className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' required/>
                </div>

                <div>
                <label>Confirm Password</label>
                <input type = 'password' name='confirm password'className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' required/>
                </div>
            

                <div>
                <input type ="Submit" name='button' className = "w-20px h-35px bg-orange-500 border hover:text-blue-500 rounded-md" />
                </div>
                </div>
            </form>
           
            <Footer />
        </div>
    )
}


export default Signup;