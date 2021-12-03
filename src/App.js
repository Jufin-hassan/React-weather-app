import './App.css';
import react,{useState} from 'react'
import axios from 'axios'

const api = {
  key:"11781f637f876436414f9b7f84581443",
  base:"api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState("");
  const [weather,setWeather] = useState("")

  // const search = evt => {
  //   if(evt.key==="Enter"){
  //     fetch(`${api.base}weather?=${query}units=metric&appid=${api.key}`)
  //     .then(res => res.json)
  //     .then(result => {
  //       setWeather(result)
  //       setQuery('')
  //       console.log(result);

  //     })
  //   }
  // }

  const search =async evt => {
    if(evt.key==="Enter"){
      var vat = await axios.get(`https://${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      setWeather(vat)
      console.log(weather);
    }
  }

  var today = new Date()
  return (
    <div className={weather!='' ? weather.data.main.temp>20 ? "app" : "cold":"app"}>
      <main className="search">
        <input 
          className="search-box"
          name="search"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </main>
      <h2 className="place">{weather===''?'' :`${weather.data.name} , ${weather.data.sys.country}`}</h2>
      <h3 className="date">{today.toDateString()}</h3>
      <div className="weather-box">
        <div className="temp">
            {weather === '' ? '' : Math.round(`${weather.data.main.temp}° C`)}
        </div>
        
      </div>
    </div>
  );
}

export default App;
