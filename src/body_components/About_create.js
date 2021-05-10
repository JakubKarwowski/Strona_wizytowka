import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleIconOnClick = (event)=>{
    const divList = document.querySelectorAll('div.about div');
    divList.forEach(
        (item)=>{
            item.classList.remove('active');
        }
    )
    event.currentTarget.parentNode.classList.add('active');
    // console.log(event.currentTarget.parentNode);
    // console.log(event.target.parentNode.parentNode.classList)

};

function About_Create (props) {

    const createElements = props.items.map
    (item=>{
        return(
            <div key={item.icon} className={item.classname}>
                <button onClick={handleIconOnClick} className='icon'>
                    <FontAwesomeIcon icon={item.icon}/>
                </button>
                <section className='iconDescription'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </section>
            </div>
        )
    });
    // console.log(createElements)
    return createElements;
            
        
    
}

export default About_Create;




{/*<button className='music' ></button> */}