export default function BotonEliminar({ tareas, setTareas }) {
    const eliminarTareas = () => {
        setTareas([]); // Elimina todas las tareas al hacer clic en el botón
    }

    return (
        <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded ml-2"
            onClick={eliminarTareas}>
            Eliminar Tareas
        </button>

    );
}