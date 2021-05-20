import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      
    const [password, setPassword] = useState(null);

    const [confirmedPassword, setConfirmedPassword] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        if ( confirmedPassword ) {
          console.log(data)
          fetch ('http://localhost:5000/addUser', {
          method: 'POST',
          headers: {'content-type': 'application/json'}, 
          body: JSON.stringify (data)
         })
         .then (res => res.json())
         console.log (data);
        }
        else {
           alert ("Wrong Input")
        }
      };

      let fPasswordIsValid ;
      const passwordChange = e => {
        let value = e.target.value;
        fPasswordIsValid = value.length > 5;
        if ( fPasswordIsValid ) {
          setPassword(e.target.value);
      }
      else {
        setPassword(null);
      }
  
      }
      let passwordIsValid ;
      const isPasswordValid = e => {

        passwordIsValid = e.target.value === password;
        if ( passwordIsValid ) {
            setConfirmedPassword(e.target.value);
             console.log ("Password are same")
        }
        else {
            setConfirmedPassword(null);
            console.log ("Password and confirm password are not same"); 
        }
     }
      console.log("Password", password);
    return (
        <div style={{width: "50%", margin: "auto", textAlign: "left"}}>
            <h3>Signup</h3>
   <Form onSubmit={handleSubmit(onSubmit)}>
       <Form.Group controlId="formBasicEmail">
       <Form.Control type="name" {...register('name')} placeholder="Your Full Name" required />
       {errors.lastName && <p>Name is required.</p>}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
       <Form.Control type="email" {...register('email')} placeholder="Your Email" required />
       </Form.Group>
       {errors.lastName && <p>Email is required.</p>}

  <Form.Group controlId="formBasicPassword">
       {password ? <Form.Control style={{color: "green"}} type="password" {...register('password')} onChange={passwordChange} placeholder="Password" required />
       : 
       <Form.Control style={{color: "red"}} type="password" {...register('password')} onChange={passwordChange} placeholder="Password" required />}
       </Form.Group>
       {errors.lastName && <p>Password is required.</p>}

  <Form.Group controlId="formBasicPassword">
      {confirmedPassword ?
        <Form.Control  style={{color: "green"}} type="Password" {...register('cPassword')} onChange={isPasswordValid} placeholder="Confirm Password" required /> 
        : <Form.Control style={{color: "red"}} type="Password" {...register('cPassword')} onChange={isPasswordValid} placeholder="Confirm Password" required /> 
      }

       </Form.Group>
       {errors.lastName && <p>Password is required.</p>}


  <Form.Group controlId="formGridAddress2">
     <Form.Control placeholder="Your Address" required />
     </Form.Group>

  <Button type="address" {...register('address')} variant="primary" type="submit">
    Signup
  </Button>
</Form>
<Link to="/login">Already Have An Account</Link>
        </div>
    );
};

export default Signup;