import './App.css';
import { useSelector } from 'react-redux/es/exports';
import Likes from './components/Likes';
import Title from './components/Title';
import Comments from './components/Comments';
import Spin from './components/Loader';

function App() {
  const error = useSelector(state => state.appReducer.error);

  console.log('error>>', error);
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>{error}</div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes/>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
