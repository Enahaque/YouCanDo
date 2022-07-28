import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <h1>Welcome to React Router!</h1>
       
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/countries' element={<Countries></Countries>}></Route>
            <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>
        </Routes>
    </div>
  );
}

export default App;
