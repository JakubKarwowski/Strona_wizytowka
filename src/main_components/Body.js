import React from 'react';
import '../main_styles/Body.scss';
import {Route, Switch} from 'react-router-dom';
import Start from '../body_components/Start';
import About from '../body_components/About.js';
import Contact from '../body_components/Contact';


class Body extends React.Component {
    render() {
        return (  
            <div className="body">
                <Switch>
                  <Route path="/Strona_wizytowka/" exact component={Start} />
                  <Route path="/Strona_wizytowka/about" component={About} />
                  {/* <Route path="/portfolio" exact component={portfolio} /> */}
                  {/* <Route path="/blog" exact component={blog} /> */}
                  <Route path="/Strona_wizytowka/contact" component={Contact} />
                </Switch>  
            </div>

        );
    };
};

export default Body;