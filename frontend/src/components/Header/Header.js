import React, { Component } from 'react';
import { HeaderTop, HeaderBottom } from './components';

class Header extends Component {
    render() {
        return (
            <header id="header-area" className="fixed-top">
                <HeaderTop/>
                <HeaderBottom/>
            </header>

        );
    }
}

export default Header;