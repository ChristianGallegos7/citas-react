import { useState, useEffect } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Cita } from './components/Cita';

function App() {

  //citas en el local storage 
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }


  const [citas, guardarCitas] = useState(citasIniciales);

  //use effect

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales])



  //funcion que tome las citas actulaes 
  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //funciona que elimina una cita

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? <h1 className='text-4xl text-red-600'>No citas yet</h1> : <h1 className='text-4xl'>Administra tus citas</h1>;

  return (
    <>
      <h1 className='text-4xl text-blue-950 text-center'>Administrador de pacientes</h1>
      <div className="flex justify-between mx-auto mt-10">
        <div className="izquierda w-full">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="derecha w-full">
          {titulo}
          {
            citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
