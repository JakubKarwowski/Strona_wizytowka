import '../body_styles/Start.scss'
import my_photo from '../pictures/noBackground.png'
import responsive_img from '../pictures/Responsive.png'
import new_standarts from '../pictures/New_standards.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Start(){
    return(
        <div className='page_wrapper'>
            <div className='introduction'>
                <h1>Hello, my name is Jakub.</h1>
                <h2>Web developer/ freelancer.</h2>
                <img src={my_photo} alt='My photo'/>
            </div>
            <h1>My websites are:</h1>
            <section className='websites_description'>
                <div className='responsive'>
                    <h2>Responsive</h2>
                    <img src={responsive_img} alt='Responsive websites'/>    
                </div>
                <div className='responsive'>
                    <h2>Using new standarts</h2>   
                    <img src={new_standarts} alt='New standarts'/>    
                </div>
                <h2>AND ALSO:</h2>
                <ul>
                    <li><h3><FontAwesomeIcon icon='check-square'/> fast</h3></li>    
                    <li><h3><FontAwesomeIcon icon='check-square'/> modern</h3></li>    
                    <li><h3><FontAwesomeIcon icon='check-square'/> beautiful</h3></li>    
                    <li><h3><FontAwesomeIcon icon='check-square'/> user friendly</h3></li>    
                </ul>  
            </section>
        </div>
    );

}

export default Start;