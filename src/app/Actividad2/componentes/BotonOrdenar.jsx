import { useState } from "react";

export default function BotonOrdenar({ tareas, setTareas }) {
    const [activo, setActivo] = useState(false);
    const ordenarAlfabeticamente = () => {
        const tareasOrdenadas = [...tareas].sort();
        if (activo) {
            tareasOrdenadas.reverse();
        }

        setTareas(tareasOrdenadas);
        setActivo(!activo);
    }
    return (
        <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={ordenarAlfabeticamente}>
            Ordenar
        </button>
    )
}
