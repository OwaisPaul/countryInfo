
import {useState, useEffect} from 'react'
import axios from 'axios'
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'


function App(){
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])
    const [selected, setSelected] =useState(null)

    useEffect( () => {
        if (query.length == 0) return
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
             .then(response => {
               const result = response.data.filter(c => {
             return c.name.common.toLowerCase().includes(query.toLowerCase())
      })
                setCountries(result)
             })
    }, [query])

    const handleShow = (name) => {
        const country = countries.find(c => c.name.common === name)
        setSelected(country)
    }
     
    return (
        <div className="input-container">
            <input  className="input" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder = "Search for a country" />
            {
                selected
                ? <CountryDetail country={selected} />
                :countries.length > 10
                ? <p className="many">Too many matches</p>
                : countries.length === 1
                ? <CountryDetail country={countries[0]} />
                :<CountryList countries={countries}  onSelect={handleShow}/>
            }
        </div>
    )
}

export default App
