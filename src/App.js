import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>

    </div>
  );
}

export default App;
