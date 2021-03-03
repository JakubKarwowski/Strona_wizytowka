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

    render() {
        
        return ( 
            <header>
                <div className="logo"><p>JK</p></div>
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
    showMenu =()=>{

        if(this.state.menuVisible === false){ 
            this.setState({
                menuVisible: !this.state.menuVisible,
                menuClass: "menu, visible"
            });
            this.hideMenu();    
        }
           
        else 
            this.setState({
                menuVisible: !this.state.menuVisible,
                menuClass: "menu"
            });
       
    };
    hideMenu =()=>{
        let a = document.querySelectorAll('a');
        let menu = document.querySelector('div.menu')
        a.forEach((a)=>{
        a.addEventListener('click', ()=>{   
            this.setState ({
                menuVisible: false,
                menuClass: "menu"
            })   
        })})
    }
};

export default Header;