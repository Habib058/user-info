import React, { useEffect, useState } from 'react';
import user from './User.css'
import fakeData from '../../fakeData/data.json';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';

const User = () => {
    const [user,SetUser] = useState([]);
    const [cart,setCart] = useState([]);
    const handleButton =(person) =>{
        console.log(person);
            const newCart = [...cart,person];
            setCart(newCart);
    }
    useEffect(()=>{
        SetUser(fakeData);
        console.log(fakeData)
    },[])
    return (
        <div className='user'>
           <div className='userContent'> 
           {
               user.map(user =><Details
                    user ={user}
                    handleButton = {handleButton}
               ></Details>)
           } 
           </div>
           <div className ='cartContent'>
               <Cart cart ={cart}></Cart>

           </div>
        </div>
    );
};

export default User;