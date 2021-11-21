// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button} from 'react-bootstrap'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     <h1>Ecom dashBoard</h1>
   </BrowserRouter>
    </div>  
  );
}

export default App;
