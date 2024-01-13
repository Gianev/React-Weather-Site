import SearchBar from './Components/SearchBar';
import {useState, useEffect} from 'react'
import styles from './Components/styles.css'
import Info from './Components/Info';
import Time from './Components/Time'
function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(city)
    
    console.log(data)
  }
  
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
 //console.log(city)
  const URL= `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=40649322cac2c18aa7c9075b48a7e35a&units=metric`

  useEffect(() => {
    const fetchData = async () =>{
    const response = await fetch (URL)
    response.json().then(json => {  
      setData(json)
      console.log(json)
  })
    }
    fetchData();
  }, [search])

  return (

  <div className='container'>


      <div >
          <Time></Time>
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a City" className='input' onChange={e => setCity(e.target.value)}></input>
          </form>
          


          {data.main !== undefined ? (
          <div> 
          <Info temp={data.main.temp} feels={data.main.feels_like} wind={data.wind.speed}
          humidity={data.main.humidity} sky={data.weather[0].description}>
          </Info>
          </div>
          ) : (
            <div className='card'>
              <p>Please Enter A Valid City</p>
              </div>
          )}
      </div>
   </div>
  );
}

export default App;
