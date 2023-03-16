import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import dbFirebae from "../firebase/firebaseConfig";
import Card from "./Card";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./List.css"

export default function List() {
  const [dataFromFirebase, setDataFromFirebase] = useState([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(dbFirebae, "parts"));
      // console.log("datos:", datos);
      const dataArr = [];
      datos.forEach((documento) => {
        const data = documento.data();
        // console.log("documentos:", data);
        dataArr.push(data);
      });
      setDataFromFirebase(dataArr);
    };
    obtenerDatos();
  }, []);

  return (
    <div>
        <div className="title is-1 is-italic">Lista de Usuarios</div>
      <div className="container-card">
        {dataFromFirebase.map((el) => {
          return (
              <Card
                name={el.full_name}
                email={el.email}
                birth={el.birth_date}
                country={el.country_of_origin}
              />
          );
        })}
      </div>
      <br/>
      <Link to="/">
      <button class="button is-primary is-outlined">Volver</button>
      </Link>
    </div>
  );
}
