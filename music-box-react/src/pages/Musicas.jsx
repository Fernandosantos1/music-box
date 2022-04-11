import React, { useEffect } from "react";
import ItemMusica from "../components/ItemMusica";
import ItemNav from "../components/ItemNav";
import api from "../service/api";
import "./reset.css";
import "./Musicas.css";

export default (props) => {
  const [musicas, setMusicas] = React.useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => setMusicas(res.data))
      .catch((err) => console.log(err.data));
  }, []);
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
          {musicas.map((value) => (
            <ItemMusica
              musica={value.name}
              artista={value.fantasyName}
              genero={value.ceo}
              ano={value.email}
              key={value.uuid}
              id={value.uuid}
            />
          ))}
        </div>
      </div>
    </>
  );
};
