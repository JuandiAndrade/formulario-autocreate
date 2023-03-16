// import React, { useEffect, useState } from "react";
// import Part from "./Part";
// import db from "../../utils/db.json";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import dbFirebae from "../firebase/firebaseConfig";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import List from "./List";
// import "bulma/css/bulma.css";
// import "./Parts.css";

// export default function Parts() {
//   const [formData, setFormData] = useState({});
//   const [dataFromFirebase, setDataFromFirebase] = useState([]);
//   const [enviado, setEnviado] = useState(false);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     // console.log(formData);

//     try {
//       const docRef = await addDoc(collection(dbFirebae, "parts"), formData);
//       console.log("Document written with ID: ", docRef.id);
//       setEnviado(true);
//       const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: "btn btn-success",
//           cancelButton: "btn btn-danger",
//         },
//         buttonsStyling: false,
//       });

//       swalWithBootstrapButtons
//         .fire({
//           title: "¿Desea ser redireccionado a la Lista?",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Acceder a la Lista",
//           cancelButtonText: "Cancelar",
//           reverseButtons: true,
//         })
//         .then((result) => {
//           if (result.isConfirmed) {
//             window.location.href = "/list";
//           } else if (result.dismiss === Swal.DismissReason.cancel) {
//             window.location.reload(false);
//           }
//         });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "There was an error submitting your data",
//         confirmButtonText: "OK",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterKey: false,
//       });
//     }
//   };

//   const data = db.items;

//   useEffect(() => {
//     const obtenerDatos = async () => {
//       const datos = await getDocs(collection(dbFirebae, "parts"));
//       // console.log("datos:", datos);
//       const dataArr = [];
//       datos.forEach((documento) => {
//         const data = documento.data();
//         // console.log("documentos:", data);
//         dataArr.push(data);
//         console.log("dataArr:", dataArr);
//       });
//       setDataFromFirebase(dataArr);
//     };
//     obtenerDatos();
//   }, []);

//   return (
//     <div>
//       <h1 className="title is-1 is-italic">Formilario</h1>
//       <div class="formulario box">
//         <form onSubmit={handleFormSubmit}>
//           {data.map((e, index) => (
//             <Part
//               key={index}
//               {...e}
//               formData={formData}
//               setFormData={setFormData}
//             />
//           ))}
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Part from "./Part";
// import db from "../../utils/db.json";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import dbFirebase from "../firebase/firebaseConfig";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import List from "./List";
// import "bulma/css/bulma.css";
// import "./Parts.css";

// export default function Parts() {
//   const [formData, setFormData] = useState({});
//   const [dataFromFirebase, setDataFromFirebase] = useState([]);
//   const [enviado, setEnviado] = useState(false);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const docRef = await addDoc(collection(dbFirebase, "parts"), formData);
//       console.log("Document written with ID: ", docRef.id);
//       setEnviado(true);

//       const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: "btn btn-success",
//           cancelButton: "btn btn-danger",
//         },
//         buttonsStyling: false,
//       });

//       swalWithBootstrapButtons
//         .fire({
//           title: "¿Desea ser redireccionado a la Lista?",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Acceder a la Lista",
//           cancelButtonText: "Cancelar",
//           reverseButtons: true,
//         })
//         .then((result) => {
//           if (result.isConfirmed) {
//             // Redireccionamos a la lista utilizando el componente Link
//             return <Link to="/list" />;
//           }
//         });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "There was an error submitting your data",
//         confirmButtonText: "OK",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterKey: false,
//       });
//     }
//   };

//   const data = db.items;

//   useEffect(() => {
//     const obtenerDatos = async () => {
//       const datos = await getDocs(collection(dbFirebase, "parts"));
//       const dataArr = [];
//       datos.forEach((documento) => {
//         const data = documento.data();
//         dataArr.push(data);
//         console.log("dataArr:", dataArr);
//       });
//       setDataFromFirebase(dataArr);
//     };
//     obtenerDatos();
//   }, []);

//   return (
//     <div>
//       <h1 className="title is-1 is-italic">Formilario</h1>
//       <div className="formulario box">
//         <form onSubmit={handleFormSubmit}>
//           {data.map((e, index) => (
//             <Part
//               key={index}
//               {...e}
//               formData={formData}
//               setFormData={setFormData}
//             />
//           ))}
//         </form>
//         {enviado && (
//           <div className="notification is-success">
//             <button className="button is-success">
//               <Link to="/list">Acceder a la Lista</Link>
//             </button>
//             <button className="button is-danger" onClick={() => setEnviado(false)}>
//               Cancelar
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Part from "./Part";
import db from "../../utils/db.json";
import { collection, addDoc, getDocs } from "firebase/firestore";
import dbFirebase from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Parts.css";

export default function Parts() {
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
