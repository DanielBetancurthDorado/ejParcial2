import React, { useEffect, useState } from "react";
const Serie = (props) => {
  const [serie, setSerie] = useState({});
  useEffect(() => {
    setSerie(props.pelicula);
  }, []);

  return (
    <>
      <td>{serie.id}</td>
      <td>{serie.name}</td>
      <td>{serie.channel}</td>
      <td>{serie.description}</td>
    </>
  );
};
export default Serie;
