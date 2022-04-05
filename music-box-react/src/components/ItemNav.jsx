import React from "react";
import LogoVerde from "../imagens/logo-verde.png"
import Avatar from "../imagens/avatar.png"
export default (props) => {
  return (
    <nav>
      <div class="container">
        <img src={LogoVerde} alt="Logo" className="logo" />
        <img src={Avatar} alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
};
