import { useForm } from "react-hook-form";
import { insertAdd, verAdd } from "../api/api";
import { useState, useEffect } from "react";

export const PopupAdd = ({ show, toggle }) => {
  const [formData, setFormData] = useState({
    iglesia: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    correo: "",
    congregacion: "",
    pastor: "",
    denominacion: "",
    encargado: "",
    estado: "",
    asistentes: "",
    observacion: "",
  });

  const [dataList, setDataList] = useState([]);
  const [avisar, setAvisar] = useState(false);

  useEffect(() => {
    fetchData();
  }, [avisar]);

  const fetchData = async () => {
    try {
      const response = await verAdd();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async () => {
    try {
      const response = await insertAdd(formData);
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className={show ? "w-[100%] top-0 bg-[rgba(0,0,0,0.7)] md:h-screen h-[100%] fixed top-0 left-0" : "hidden"}>
        <div className="cursor-pointer absolute right-12 top-10" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="bg-green-900 p-[50px] md:w-[50%] w-[60%] rounded-2xl flex flex-col absolute md:top-[0%] top-0 left-[25%] overflow-scroll h-[70%]">
          <h5 className="text-2xl">Agregar nuevo</h5>
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Iglesia"
            onChange={handleChange}
            name="iglesia"
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Telefono"
            name="telefono"
            onChange={handleChange}
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Dirección"
            name="direccion"
            onChange={handleChange}
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Ciudad"
            name="ciudad"
            onChange={handleChange}
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Correo"
            name="correo"
            onChange={handleChange}
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="# Congregacion"
            name="congregacion"
            onChange={handleChange}
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Pastor"
            name="pastor"
            onChange={handleChange}
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Denominación"
            onChange={handleChange}
            name="denominacion"
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Encargado"
            onChange={handleChange}
            name="encargado"
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Estado"
            onChange={handleChange}
            name="estado"
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="# de asistentes"
            onChange={handleChange}
            name="asistentes"
          />
          <input
            type="text"
            className="mt-5 rounded-lg px-3 py-1"
            placeholder="Observación"
            onChange={handleChange}
            name="observacion"
          />
          <button
            className="mt-5"
            onClick={() => {
              onSubmit();
              setAvisar(!avisar);
            }}
          >
            Añadir
          </button>
        </div>
      </div>
    </>
  );
};
