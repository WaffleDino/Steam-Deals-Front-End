import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([])

  // fetch URL-API
  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(r => r.json())
    .then(json => setData(json))
  }, [])

  console.log(data)

  return (
    <div className="App">
      <p>help us dex</p>
    </div>
  );
}

export default App;
