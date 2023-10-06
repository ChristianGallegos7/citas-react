/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({ crearCita }) => {


    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false);


    const actualizarState = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //cuando se envia el formulario

    const submitCita = (e) => {
        e.preventDefault();
        //validar datos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        //quitar el mensaje
        setError(false);

        //asigar id
        cita.id = uuidv4();

        //crear la cita
        crearCita(cita);
        //reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-semibold mb-4">Crear cita:</h2>
            {
                error ? <p className="bg-red-700 text-white p-5 mb-5 rounded-md">Todos los campos son obligatorios</p> : null
            }
            <form className="space-y-4" onSubmit={submitCita}>
                <div className="mb-4 ">
                    <label htmlFor="mascota" className="block text-sm font-medium text-white">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        name="mascota"
                        id="mascota"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-zinc-900"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="propietario" className="block text-sm font-medium text-white">
                        Nombre Dueño
                    </label>
                    <input
                        type="text"
                        name="propietario"
                        id="propietario"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-zinc-900"
                        placeholder="Nombre dueño de la mascota"
                        onChange={actualizarState}
                        value={propietario}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="fecha" className="block text-sm font-medium text-white">
                        Fecha
                    </label>
                    <input
                        type="date"
                        name="fecha"
                        id="fecha"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-zinc-900"
                        onChange={actualizarState}
                        value={fecha}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="hora" className="block text-sm font-medium text-white">
                        Hora
                    </label>
                    <input
                        type="time"
                        name="hora"
                        id="hora"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-zinc-900"
                        onChange={actualizarState}
                        value={hora}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sintomas" className="block text-sm font-medium text-white">
                        Sintomas
                    </label>
                    <textarea
                        name="sintomas"
                        id="sintomas"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-zinc-900"
                        rows="4"
                        onChange={actualizarState}
                        value={sintomas}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
