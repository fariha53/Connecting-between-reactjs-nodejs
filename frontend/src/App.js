import React, { useEffect, useState } from 'react'
import Axios from "axios";
import './App.css';

function App() {
  const [data, setData]=useState();
  const getData = async()=>{
    const response=await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }
 useEffect(()=>{
  getData()
 },[]);

  return (
    <div className="App">
     <div>{data}</div>

    </div>
  );
}

export default App;