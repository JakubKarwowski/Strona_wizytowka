import '../main_styles/App.scss';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faBasketballBall, faCar, faMoneyBillWave,faClock, faBicycle, faDumbbell, faBookReader } from '@fortawesome/free-solid-svg-icons'

library.add(faMusic, faBasketballBall, faCar, faMoneyBillWave,faClock, faBicycle, faDumbbell, faBookReader)

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Body/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
