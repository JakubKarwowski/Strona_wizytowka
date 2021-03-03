import './App.scss';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import {BrowserRouter as Router} from 'react-router-dom'

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
