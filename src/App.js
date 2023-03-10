import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/> 
        <MainDash/>
        
        <RightSide/>
       <button>Lessons</button>
      </div>
    </div>
  );
}

export default App;
