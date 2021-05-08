import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../body_styles/Contact.scss'

const handlePhoneOnClick = (event)=>{
    const phoneNumber = document.querySelector('div.phone p');
    phoneNumber.classList.toggle('active');
}
const handleEnvelopeOnClick = ()=>{
    const form = document.querySelector('div.mail form')
    form.classList.toggle('active');
console.log(form)
}
const handleOnSubmit = (event)=>{
    event.preventdefault();
}

function Contact (){
    return (
        <div className='contact'>
            <h2>Would You like to contact me to start the cooperation or to suggest some improvement on this website? :)
            </h2>   
            <div className='links'>
                <div className='link'>
                    <a href="https://www.linkedin.com/in/jakub-karwowski-033a0715b/?locale=en_US" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </div>
                <div className='link'>
                    <a href="https://www.facebook.com/kuba.karwowski.7/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />      
                    </a>
                </div>
            </div>
            <div className='phone'>
                <div className='wrapper'>
                    <button onClick={handlePhoneOnClick}>
                        <FontAwesomeIcon icon='phone-alt' />
                    </button>
                    <p>+48 697 206 030</p>
                </div>
            </div>
            <div className='mail'>
                <div className='wrapper'>
                    <button onClick={handleEnvelopeOnClick}>
                        <FontAwesomeIcon icon='envelope' />
                    </button>
                    <form onSubmit={handleOnSubmit}>
                        <label>Name</label>
                        <input type='text' placeholder='Write Your name here'></input>
                        <label>E-mail</label>
                        <input type="email" placeholder='Your e-mail adress'></input>
                        <label>Message</label>
                        <textarea rows="10" cols="30" placeholder='Space for Your message'></textarea>
                        <input type="submit" value='Send the message'></input>
                    </form>
                </div>
                
            </div>
        </div>
   

    )
}

export default Contact;