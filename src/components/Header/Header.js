import React from 'react';
import headerCss from './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <nav>
                    <a href="/shop">Users</a>
                    <a href="/review">Connect User</a>
                    <a href="/manage">Review</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;