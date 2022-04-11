import React from "react";
import EditIcon from "../imagens/edit-icon.png";
import DeleteIcon from "../imagens/delete-icon.png";

export default (props) => {
  return (
    <div className="card-music">
      <div className="icons">
        <img src={EditIcon} alt="" />
        <img src={DeleteIcon} alt="" />
      </div>
      <div className="info-music">
        <p>
          <strong className="card-title">música: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.musica}
          />
        </p>
        <p>
          <strong className="card-title">artista: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.artista}
          />
        </p>
        <p>
          <strong className="card-title">categoria: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.genero}
          />
        </p>
        <p>
          <strong className="card-title">ano: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.ano}
          />
        </p>
        <button className="btn-salvar-disabled">Salvar</button>
      </div>
    </div>
  );
};
