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
        <div className="fila1 flex justify-center w-[100%]">
          <div className="flex flex-col">
            <h6 className="border bg-green-700 px-3 py-2">Iglesia</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.iglesia}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Telefono</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.telefono}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Direccion</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.direccion}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Ciudad</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.ciudad}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Correo</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.correo}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Congregación</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.congregacion}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Pastor</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.pastor}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Denominación</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.denominacion}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Encargado</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.encargado}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Estado</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.estado}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Asistentes</h6>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="border">
                  {dato.asistentes}
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            <h6 className="bg-green-700 px-3 py-2">Observación</h6>
            <ul className="">
              {datos.map((dato, index) => (
                <li key={index} className="border flex">
                  {dato.observacion}
                  <div>
                    <li key={index} className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </li>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            {datos.map((dato, index) => (
              <li key={index} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </li>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
