import '../body_styles/Start.scss'
import my_photo from '../pictures/noBackground.png'
import responsive_img from '../pictures/Responsive.png'
import new_standarts from '../pictures/New_standards.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom'

function Start(){
    return(
        <div className='page_wrapper'>
            <div className='introduction'>
                <div className='welcome_text'>
                <h1>Hello, my name is Jakub.</h1>
                <h2>Web developer/ freelancer.</h2>
                </div>
                
                <img src={my_photo} alt='My photo'/>
            </div>
            <div className='short_description'>
                <p>I live in Lodz - Poland. I am ambitious, young person that loves to learn and push the boundaries. </p>
                <p>I enjoy solving multiple problems for others and creating beautiful products.</p>
                <p>Web development is not only my work and source of income but most importantly- the PASSION. </p>
                <p className='center'>My motto is:</p>
                <div className='motto_container'>
                    <p className='motto'>"Do what you can, with what you have, where you are."</p>
                    <p className='author'>Theodore Roosevelt</p>
                </div>
                <p className='center'>More about me:</p>
                <div className='button'><NavLink to='/Strona_wizytowka/mystory'>Read my story</NavLink></div>
            </div>
           
            <h1>My websites are:</h1>
            <section className='websites_description'>
                <div className='images'>
                    <div>
                        <h2>Responsive</h2>
                        <img src={responsive_img} alt='Responsive websites'/>    
                    </div>
                    <div>
                        <h2>Using new standards</h2>   
                        <img src={new_standarts} alt='New standards'/>    
                    </div>
                </div>
                
                <h2>And also:</h2>
                <ul>
                    <li><FontAwesomeIcon icon='check-square'/> fast</li>    
                    <li><FontAwesomeIcon icon='check-square'/> modern</li>    
                    <li><FontAwesomeIcon icon='check-square'/> user friendly</li>    
                    <li><FontAwesomeIcon icon='check-square'/> beautiful</li>  
                    <li><FontAwesomeIcon icon='check-square'/> minimalistic</li>    
                </ul>  
            </section>
            <section className='links'>
                <div className='button'><NavLink to='/Strona_wizytowka/hobbies'>My hobbies</NavLink></div>
                {/* <div><NavLink to='/Strona_wizytowka/portfolio'>My work</NavLink></div> */}
                {/* <div><NavLink to='/Strona_wizytowka/blog'>Read my blog</NavLink></div> */}
                <div className='button'><NavLink to='/Strona_wizytowka/contact'>Contact me</NavLink></div>
            </section>
        </div>
    );

}

export default Start;