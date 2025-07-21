import { useState } from 'react'
import './App.css'
import getData from './script'
import Table from './Table'
import { useEffect } from 'react';


function App() {
  const [teams, setTeams] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
    try {
      const data = await getData();
      setTeams(data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  fetchData(); // call it here
}, []);

  return (
    <>
      <h1>IPL Season 2022 Points</h1>
      <Table teams ={teams} />
      
    </>
  )
}

export default App
