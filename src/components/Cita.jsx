/* eslint-disable react/prop-types */
export const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg w-50">
            <p className="text-lg font-semibold">Nombre Mascota: {cita.mascota}</p>
            <p className="text-sm text-gray-600">Nombre Dueño: {cita.propietario}</p>
            <p className="text-sm text-gray-600">Fecha: {cita.fecha}</p>
            <p className="text-sm text-gray-600">Hora de Alta: {cita.hora}</p>
            <p className="text-sm">Sintomas: {cita.sintomas}</p>

            <button
                onClick={() => eliminarCita(cita.id)}
                className="bg-red-600 text-white px-6 py-2 mt-3"
            >Eliminar &times;</button>


        </div>
    )
}
