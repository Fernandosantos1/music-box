import React from "react";

export default props => {
  const [votos, setVotos] = React.useState(0);

  return (
    <>
      <h1>{props.titulo}</h1>
      <button
        onClick={() => {
          setVotos(votos + 1);
        }}
      >
        Votar
      </button>
      <h1>Quantidade: {votos}</h1>
      
    </>
  );
};
