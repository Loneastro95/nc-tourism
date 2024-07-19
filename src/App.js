import './App.css';
import NavBar from './components/Navbar/Navbar';
import Search from './components/Header/Search';
import CardContainer from './components/Body/Card';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <CardContainer/>
    </div>
  );
}

export default App;
