
import './App.css';
import HeroImage from './components/HeroImage/HeroImage';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import CardImage from "./assets/BollywoodHits.png"

function App() {
  return (
    <div>
     <Navbar />
     <HeroImage />
     <Card cardImage={CardImage} followers="100 Follows" title="New Bollywood"/>
    </div>
  );
}

export default App;
