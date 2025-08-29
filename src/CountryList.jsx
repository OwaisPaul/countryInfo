

function CountryList({ countries, onSelect }) {
  return (
    <ul>
      {countries.map(c => (
        <li key={c.cca3}>
          {c.name.common}
          <button onClick={() => onSelect(c.name.common)}>show</button>
        </li>
      ))}
    </ul>
  )
}


export default CountryList