
import React, { useEffect, useState } from "react";
import Part from "./Part";
import db from "../../utils/db.json";
import { collection, addDoc, getDocs } from "firebase/firestore";
import dbFirebase from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [dataFromFirebase, setDataFromFirebase] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(dbFirebase, "parts"), formData);
      console.log("Document written with ID: ", docRef.id);
      setEnviado(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const data = db.items;

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(dbFirebase, "parts"));
      const dataArr = [];
      datos.forEach((documento) => {
        const data = documento.data();
        dataArr.push(data);
        console.log("dataArr:", dataArr);
      });
      setDataFromFirebase(dataArr);
    };
    obtenerDatos();
  }, []);

  return (
    <div>
      <h1 className="title is-1 is-italic">Formilario</h1>
      <div className="formulario box">
        <form onSubmit={handleFormSubmit}>
          {data.map((e, index) => (
            <Part
              key={index}
              {...e}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
        </form>
        {enviado && (
          <div className="nota notification is-success">
            <button className="button is-success">
              <Link to="/list">
                <button className="button is-primary">Acceder a la Lista</button>
              </Link>
            </button>
            <button
              className="button is-danger"
              onClick={() => setEnviado(false)}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
