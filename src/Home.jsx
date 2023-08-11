import React from 'react'
import { useEffect,useState } from 'react'
import data from './data.json';
import './Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setDetails(data.train);
    //console.log(data.train);
  },[])
  const numAscending = [...details].sort((a, b) => a.price.sleeper - b.price.sleeper);
  console.log(numAscending);
  const numDescending = [...numAscending].sort((a, b) => b.delayedBy - a.delayedBy);
  console.log(numDescending);
    
    return (
    <div > 
        <h1>Train Management</h1>
        <table style={{marginTop:"10px",width:"100%"}}> 
        <tbody>
        <tr>
          <th >TrainName</th>
          <th>TrainNumber</th>
          <th>Departuretime</th>
          <th>SeatsAvailable in sleeper</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
        {numAscending.map((item, index) => (
          <tr key={index} style={{border:"2px solid black",padding:"20px"}}>
            <td>{item.trainName}</td>
            <td>{item.trainNumber}</td>
            <td>{item.departureTime.Hours}hrs{item.departureTime.Minutes}Mins{item.departureTime.Seconds}Secs</td>
            <td>{item.price.sleeper}</td>
            <td>{item.delayedBy}</td>
           <Link to="/view"> <td><button>View</button></td></Link>
          </tr>
        ))}
      </tbody>
      </table>
  </div>
  )
}
