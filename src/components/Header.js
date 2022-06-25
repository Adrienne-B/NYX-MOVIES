import React from 'react';
import Menu from './Menu';

function Header(props) {
    const { setIsHamburgerOpen, isHamburgerOpen } = props;
    return <Menu setIsHamburgerOpen={setIsHamburgerOpen} isHamburgerOpen={isHamburgerOpen} />;
}

export default Header;
