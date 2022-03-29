import React, { useState } from "react";
import api from "./service/api";
import Votacoes from "./components/Votacoes";

function App() {
  const [data, setData] = useState([]);

  const listar = () => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error(error.data);
      });
  };

  return (
    <>
    <Votacoes titilu="bk"/>
    <Votacoes titilu="mc"/>
    {/*
      <h1>Ahhhh</h1>
      <button onClick={listar}>Ahhh</button>
      <ul>
        {data.map((value) => (
          <li key={value.id}>{value.musica}{value.ano}</li>
          
        ))}
      </ul>
*/}

    </>
  );
}

export default App;
