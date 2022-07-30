
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';




function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
        <Main/>
        <Footer/>
       
      </header>
    </div>
  );
}

export default App;