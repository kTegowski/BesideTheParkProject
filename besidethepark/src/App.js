import logo from './logo.svg';
import './App.css';
import HeaderBar from './HeaderBar/HeaderBar';
import TitleBar from './TitleBar/TitleBar';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <HeaderBar />
      </header>
      <TitleBar />
    </div>
  );
}

export default App;
