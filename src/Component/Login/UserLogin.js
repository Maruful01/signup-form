import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const UserLogin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     
    const [passwordValid, setPasswordValid] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     const onSubmit = (data) => {

    };


    let passwordIsValid ;
      const passwordChange = e => {

        passwordIsValid = loggedInUser.password == e.target.value;
        if ( passwordIsValid ) {
            setPasswordValid (true);
        }
        else {
            setPasswordValid (false);
        }
        console.log (e.target.value)
  
      }

    return (
        <div>
<form onSubmit={handleSubmit(onSubmit)}>

<Form.Group controlId="formBasicPassword">
   <Form.Control style={passwordValid ? {color: "green"}: {color: "red"}} type="password" {...register('password')} onChange={passwordChange} placeholder="Password" required />
   {passwordValid ? <p>password is valid</p> : <p>your password is not valid</p> }
       </Form.Group>
       
       {errors.lastName && <p>Password is required.</p>}

{errors.lastName && <p>Email is required.</p>}

{passwordValid ?
    <Link to="/details"> 
    <Button type="address" {...register('address')} variant="primary" type="submit">
     Login
    </Button>
    </Link>
    :

    <Button type="address" {...register('address')} variant="primary" type="submit">
     Login
    </Button>

}
</form>
<Link to="/signup">Create Account</Link>
        </div>
    );
};

export default UserLogin;