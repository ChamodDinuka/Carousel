import './App.css';
import Carousel  from './components/Carousel'

function App() {
  return (
    <div className="App">
      <Carousel slides = {1} Infinite={false}/>
      <Carousel slides = {4} Infinite={true}/>
      <Carousel slides = {10} Infinite={false}/>
    </div>
  );
}

export default App;
