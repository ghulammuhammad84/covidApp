
import './App.css';
import HeadBar from './components/HeadBar';
import Weather from './components/Weather';
import Country from './components/Country';
import {useState , useEffect } from 'react';



function App() {

  const [weatherState, setWeatherState] = useState({});
    const [CountryState, setCountry] = useState([]);

  useEffect(() => {
      async function FetchApi() {
          let weatherApi = await fetch('https://api.covid19api.com/summary');
          let jsonApi = await weatherApi.json();
          delete jsonApi.Global.NewRecovered
          delete jsonApi.Global.Date
          delete jsonApi.Global.TotalRecovered
          delete jsonApi.Global.NewDeaths
          setWeatherState(jsonApi.Global);
          setCountry(jsonApi.Countries);

// { this is Appjs section for git}
      }
      FetchApi();
  }, []);


  return (
    <div >
      <HeadBar/>
    <Weather weatherState={weatherState}/>
    <Country Country={CountryState}/>
    </div>
  );
}

export default App;
