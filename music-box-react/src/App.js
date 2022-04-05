import React, { useState } from "react";
import api from "./service/api";
import Musicas from "./pages/Musicas";

function App() {

  return (
    <>
      <Musicas />
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
