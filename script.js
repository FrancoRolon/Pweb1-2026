document.addEventListener("DOMContentLoaded", function () {
    // 1. Definir la fecha del próximo partido (Año, Mes [0-11], Día)
    // Nota: En JavaScript los meses van de 0 a 11. Julio es el mes 6.
    const fechaPartido = new Date(2026, 6, 10); 

    // 2. Obtener la fecha actual del sistema
    const fechaActual = new Date();

    // 3. Referenciar el elemento del DOM donde mostraremos el texto
    const textoContador = document.getElementById("texto-contador");

    // 4. Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = fechaPartido - fechaActual;

    // 5. Evaluar si la fecha ya pasó o calcular los días restantes
    if (diferenciaMilisegundos <= 0) {
        textoContador.innerHTML = "⚽ El próximo partido ya se está disputando o finalizó";
    } else {
        // Convertir milisegundos a días redondando hacia arriba
        const diasRendondeados = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
        textoContador.innerHTML = `⏳ Faltan ${diasRendondeados} días para el próximo partido`;
    }
});