import logo from './logo.svg';
import './App.css';
import Domains from './components/Domain/Domains';
import Subdomains from './components/SubdomainsList/Subdomains';


function App() {
  return (
    <div className="App">
      {/* <Domains/> */}
      <Subdomains/>
    </div>
  );
}

export default App;
