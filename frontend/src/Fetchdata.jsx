import { useEffect, useState } from "react";

function Fetchdata(){
    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data from the Express API
      fetch('http://localhost:5000/api/data/user')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data.messaage)
        }
        )
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h1>{data ? data : 'Loading...'}</h1>
      </div>
    );
}

export default Fetchdata;