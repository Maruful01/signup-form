import React, { useContext } from 'react';
import { UserContext } from '../../App';


const Details = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1>Details</h1>
            <p>{loggedInUser.name}</p>
            <p>{loggedInUser.email}</p>
            <p>{loggedInUser.address}</p>
       </div>
    );
};

export default Details;