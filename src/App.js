import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <FontAwesomeIcon icon={faHeart} />
          <span> Kocham Cię Misiaczku!!! </span>
        <FontAwesomeIcon icon={faHeart} />
        </h1>
      </header>
    </div>
  );
}

export default App;
