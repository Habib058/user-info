import React from 'react';
import details from './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Details = (props) => {
    const {img,name,age,email,salary} = props.user;
    return (
        <div className='person'>
            <div className='imgContent'>
            {
                <img src={img} alt="" />
            }
            </div>
            <div className='detailsContent'>
                <h3>Name:{name}</h3>
                <h5>Age:{age}</h5>
                <p><b>Email:{email}</b> </p>
                <p>Salary: ${salary}</p>
                <button id='button'  onClick={() =>props.handleButton(props.user)}><FontAwesomeIcon icon={faPlusCircle} />  Add On Your Profile</button>


            </div>
        </div>
    );
};

export default Details;