import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function About_Create (props) {

    const createElements = props.items.map
    (item=>{
        return(
            <div key={item.icon} className={item.classname}>
                <span className='icon'>
                    <FontAwesomeIcon icon={item.icon}/>
                </span>
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