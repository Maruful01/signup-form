import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UserDetails from '../UserDetails/UserDetails';
import { useHistory, useLocation } from 'react-router-dom';

const UserLogin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     
    const [passwordValid, setPasswordValid] = useState(false);

    // let isPassValid;
    const onChanged = e => {
        console.log (e.target.value);
        // isPassValid = loggedInUser.password === e.target.value;

        // if (isPassValid) {
        //     setPasswordValid (true);
        // }
        // else {
        //     setPasswordValid (false);
        // }
    }


    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     const onSubmit = (data) => {

    };

    return (
        <div>
<Form onSubmit={handleSubmit(onSubmit)}>
<Form.Control type="password" onChange={onChanged} {...register('password')} placeholder="Password" required />
<br />
{passwordValid ?
    <Link to="/details"> 
    <Button type="address" {...register('address')} variant="primary" type="submit">
     Login
    </Button>
    </Link>
    :
    <Link to="/details"> 
    <Button type="address" {...register('address')} variant="primary" type="submit">
     Login
    </Button>
    </Link>
}
<UserDetails></UserDetails> 
</Form>
<Link to="/signup">Create Account</Link>
        </div>
    );
};

export default UserLogin;