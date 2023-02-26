import './App.css';
import HeaderBar from './HeaderBar/HeaderBar';
import TitleBar from './TitleBar/TitleBar';
import Episode from './TitleBar/EpisodeCol/EpisodeCol';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <HeaderBar />
      </header>
      <div className='Title'>
        <TitleBar />
        <Episode />
      </div>
      
      
    </div>
    
  );
}


export default App;

