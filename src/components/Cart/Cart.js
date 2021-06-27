import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalSalary = cart.reduce((total,person) =>total + person.salary,0);
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const person = cart[i];
        totalSalary = totalSalary+ parseInt(person.salary);

        
    }
    return (
        <div>
            <h2>Hello Cart</h2>
            <h5>Total Person Added:{cart.length}</h5>
            <p>Total Salary:${totalSalary}</p>
        </div>
    );
};

export default Cart;