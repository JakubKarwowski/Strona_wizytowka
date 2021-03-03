import React from 'react';
import './Header.scss'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    state= {
            menuVisible: false,
            menuClass: "menu",
    };

    componentDidMount(){
        // let button = document.querySelector('button.hamburger');
        // let menu = document.querySelectorAll('div.menu'); 
    }

    

    render() {

        console.log(this.state.menuVisible)
        console.log(this.state.menuClass)
        return ( 
            <header>
                <div className="logo">JK</div>
                <Router>
                    <div className={this.state.menuClass}>
                        <ul>
                            <li><NavLink to='/' exact>Start</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                </Router>
                <button className='hamburger' onClick={this.showMenu}><FontAwesomeIcon icon={faBars} /></button>
            </header>

        );
    };
    showMenu= ()=>{

        if(this.state.menuVisible === false)
            this.setState({
                menuVisible: !this.state.menuVisible,
                menuClass: "menu, visible"
            });
        else 
            this.setState({
                menuVisible: !this.state.menuVisible,
                menuClass: "menu"
            });
       
    };
};

export default Header;