import './App.css';
import Likes from './components/Likes';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
