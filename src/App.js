import './App.css';
import NavBar from "./NavBar"
import banner from './Images/banner.jpg'
function App() {
  return (
    <div className="App">
      <img src={banner} alt='a banner that has farmers recycle logos and plants' id="banner"></img>
      <NavBar />
      <footer className='Footer'>Author: Arda Doruk Kaytancı</footer>
    </div>
  );
}

export default App;
