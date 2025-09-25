type TareaType = {
    id: number
    nombre: string
    estado: string
    fecha: Date
}

function main(): void {
    let tarea: TareaType = {
        id: 1,
        nombre: "tarea 1",
        estado: "Pendiente",
        fecha: new Date()
    };

    console.log("Tarea: ", tarea);
};

main();