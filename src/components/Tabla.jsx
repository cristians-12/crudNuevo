import { verAdd } from "../api/api";
import { useEffect, useState } from "react";

export const Tabla = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await verAdd();
        setDatos(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <>
      <div className=" w-[100%]">
        <div className="fila1 flex w-[100%]">
          <div className="flex flex-col">
            <h6 className="border">Iglesia</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">{dato.iglesia}</li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6>Telefono</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">{dato.telefono}</li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6>Direccion</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">{dato.direccion}</li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6>Ciudad</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">{dato.ciudad}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
