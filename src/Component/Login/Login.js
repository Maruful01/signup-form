import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UserDetails from '../UserDetails/UserDetails';
import UserLogin from './UserLogin';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const click = () => {
        fetch ('http://localhost:5000/users?email='+loggedInUser.email) 
        .then (res => res.json())
        .then (data =>{
            // setBookings (data[0])
            const newUser = {...loggedInUser};
            newUser.name = data[0].name;
            newUser.email = data[0].email;
            newUser.address = data[0].address;
            newUser.password = data[0].password;
            setLoggedInUser(newUser);
            console.log(data)
        } )
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {

      };

      console.log (loggedInUser.email);
    const onMouseOut = e => {
        const newUser = {...loggedInUser};
        newUser.email = e.target.value;
        // newUser.name = bookings.name;
        setLoggedInUser(newUser);
    }
    /////

    return (
        <div style={{width: "50%", margin: "auto", textAlign: "left"}}>
         {
             loggedInUser.name ? <UserLogin></UserLogin> : 
             <div>
                 <h3>Login</h3>
             <Form action="/login" method="POST" onSubmit={handleSubmit(onSubmit)}>
          
             <Form.Group controlId="formBasicPassword">
                <Form.Control type="email" {...register('email')} onChange={onMouseOut} placeholder="Your Email" />
                </Form.Group>
                {errors.lastName && <p>Email is required.</p>}
          
                
             <Button  onClick={ click }  type="address" {...register('address')} variant="primary" type="submit">
              Next
             </Button>
          
              <UserDetails></UserDetails> 
           </Form>
           <Link to="/signup">Create Account</Link>
             </div>
             
         }
        </div>
    );
};

export default Login;