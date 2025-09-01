

function CountryList({ countries, onSelect }) {
  return (
    <ul>
      {countries.map(c => (
        <li key={c.cca3} className="list-item">
          {c.name.common}
          <button className="show-btn" onClick={() => onSelect(c.name.common)}>show</button>
        </li>
      ))}
    </ul>
  )
}


export default CountryList