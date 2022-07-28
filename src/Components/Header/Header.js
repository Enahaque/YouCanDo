import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            {/* <p>You can do this, I believe in you.</p> */}
            <nav>
                <Link to='/'>Home</Link>{' '}
                <Link to='/countries'>Countries</Link>
            </nav>
        </div>
    );
};

export default Header;