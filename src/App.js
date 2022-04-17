import './App.css';
import Homepage from './components/Homepage';
import mainPage from './Images/Background.png';
import style from './modules/main.module.css';


function App() {
  return (
    <div className="App">
      <img className={style.mainPicture} src={mainPage} alt="mainPage" />
      <Homepage />
    </div>
  );
}

export default App;
