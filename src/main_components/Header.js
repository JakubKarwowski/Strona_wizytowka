import React from 'react';
import '../main_styles/Header.scss'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg';

class Header extends React.Component {

    state= {
            menuVisible: false,
            menuClass: "menu",
    };

    render() {
        
        return ( 
            <header>
                <div className="logo">
                <NavLink to='/Strona_wizytowka' exact><img src={logo} alt='logo' /></NavLink>
                </div>
                
                <div className={this.state.menuClass}>
                    <ul>
                        <li><NavLink to='/Strona_wizytowka' exact>Start</NavLink></li>
                        <li><NavLink to='/Strona_wizytowka/mystory'>My story</NavLink></li>
                        <li><NavLink to='/Strona_wizytowka/hobbies'>My hobbies</NavLink></li>
                        {/* <li><NavLink to='/Strona_wizytowka/portfolio'>Portfolio</NavLink></li> */}
                        {/* <li><NavLink to='/Strona_wizytowka/blog'>Blog</NavLink></li> */}
                        <li><NavLink to='/Strona_wizytowka/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                
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