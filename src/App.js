import './App.css';
import NavBar from "./NavBar"
import Footer from './Footer';
import banner from './Images/banner.jpg'
function App() {
  return (
    <div className="App">
      <img src={banner} alt='a banner that raises awareness about endangered spicies'></img>
      <NavBar />
      <footer className='Footer'>Author: Arda Doruk Kaytancı</footer>
    </div>
  );
}

export default App;
