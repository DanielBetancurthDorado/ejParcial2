import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Serie from "./Serie";
import Grafica from "./Grafica";
import "bootstrap/dist/css/bootstrap.css";
import {Container} from "react-bootstrap";


const SerieList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) {
        console.log("No hay servicio");
      } else {
        setData(JSON.parse(localStorage.getItem("series")));
      }
    } else {
      fetch(props.url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          const peliculasGuardar = JSON.stringify(res);
          localStorage.setItem("series", peliculasGuardar);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  


  return (
    <Container>
         <table className="table table-striped">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <FormattedMessage id="Name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Channel" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Description" />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => (
                <tr key={i}>
                  <Serie pelicula={e} />
                </tr>
              ))}
            </tbody>
          </table>
    <div>
      <Grafica info={props.url}/>
    </div>
    </Container>
  );
};
export default SerieList;
