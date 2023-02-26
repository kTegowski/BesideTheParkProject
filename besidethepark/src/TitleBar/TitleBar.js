import './TitleBar.css';
import logo from './logo.png';
function TitleBar() {
    return (
      <div className="TitleBar">
        <p className="description">
             Episode of the  <b> 4th </b>  season of the series 
        </p>
        <h1 className="seriesName">
            Rick and Morty
        </h1>
        <img src={logo} className="logo" alt = "logo" />
      </div>
    );
  }
  
  export default TitleBar;