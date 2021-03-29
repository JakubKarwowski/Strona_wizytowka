import React from 'react';
import '../body_styles/About.scss'
import data_about from "./body_data/data_about.json"
import About_Create from "./About_create"




class About extends React.Component{

    render() {  
        
        return (  
            <div className="about">   
                <h1>Want to know my hobbies? :)</h1>          
                <About_Create items= {data_about.items}/>
            </div>
        );
    };
};

export default About;