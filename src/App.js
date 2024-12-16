import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
