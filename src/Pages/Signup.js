import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Header2 from './Header2';
import {useState} from "react";


function Signup (){

            const {register, formState: {errors}, handleSubmit,} = useState();
            const onSubmit = (data) => console.log(data)
    return(
        <div>
            <Nav />

            <Header2 />

           
                
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div className='p-14'>

                <div>
                <label>First Name</label>
                <input type = 'text' name = 'first name' className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' {...register("FirstName", {required: true})} />
                <error>
                    {errors.FirstName?.type === "required" && "FirstName is required"}
                </error>
                </div>

                <div>
                <label>Middle Name</label>
                <input type = 'text' name = 'middle name' className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' {...register("MiddleName", {required: true})}/>
                <error>
                    {errors.MiddleName?.type === "required" && "MiddleName is required"}
                </error>
                </div>
    

                <div>
                <label>Last Name</label>
                <input type = 'text' name = 'last name' className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' {...register("LastName", {required: true})}/>
                <error>
                    {errors.MiddleName?.type === "required" && "MiddleName is required"}
                </error>
                </div>

                <div>
                <label>Email Address</label>
                <input type = 'email' name='email address'className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' {...register("Email", {required: true})}/>
                <error>
                    {errors.Email?.type === "required" && "Email is required"}
                </error>
                </div>

                <div>
                <label>Phone Number</label>
                <input type = 'number' name='number'className='w-20px text-gray-600 block mb-4 h-35 border rounded-md shadow' {...register("Number", {minLength: 11, maxLength: 14,})}/>
                <error>
                    {errors.Number?.type === "minLength" && "Number is incomplete"}
                    {errors.Number?.type === "maxLength" && "Number is incomplete"}
                </error>
                </div>

                <div>
                <label>Password</label>
                <input type = 'password' name='password'className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' {...register("Password", {required: true, minLength: 5, maxLength: 12,})}/>
                <error>
                    {errors.Password?.type === "minLength" && "password not strong enough"}
                    {errors.Password?.type === "maxLenght" && "password not strong enough"}
                </error>
                </div>

                <div>
                <label>Confirm Password</label>
                <input type = 'password' name='password'className='w-20px block text-gray-600 mb-4 h-35 border rounded-md shadow' {...register("FirstN", {required: true})}/>
                </div>
            

                <div>
                <input type ="Submit" name='button' className = "w-20px h-35px bg-orange-500 border hover:text-blue-500 rounded-md "/>
                </div>
                </div>
            </form>
           
            <Footer />
        </div>
    )
}

export default Signup;