import React from "react";
import ItemMusica from "../components/ItemMusica";
import ItemNav from "../components/ItemNav";
import "./reset.css";
import "./Musicas.css";

export default (props) => {
  return (
    <>
      <ItemNav />
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          <ItemMusica 
          musica="M4"
          artista="Matue"
          genero="trap"
          ano={0}
          id="1"
          />
        </div>
      </div>
    </>
  );
};
