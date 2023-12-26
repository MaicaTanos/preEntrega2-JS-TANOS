const carrito = [];

const ordenarMenorMayor = () => {
    eventos.sort((a,b) => a.precioAdulto - b.precioAdulto);
    mostrarEventos(); 
}

const ordenarMayorMenor = () => {
    eventos.sort((a,b) => b.precioAdulto - a.precioAdulto)
    mostrarEventos();
}

const mostrarEventos = () => {
    const listaEventos = eventos.map(evento => {
        return '- '+evento.nombre+' Adultos $'+evento.precioAdulto+' Menores $'+evento.precioMenor
    });
    alert("EVENTOS:"+"\n\n"+listaEventos.join("\n"));
    compraEventos(listaEventos);
}

const compraEventos = (listaEventos) => {
    let seguirComprando = true;
    do {
        let eventoNombre = prompt("¿A cuál evento desea asistir: A, B o C?"+'\n\n'+listaEventos.join('\n')).toLocaleUpperCase();

        switch (eventoNombre) {
            case "A":
                alert('Evento escogido: El lago de los cisnes');
                break;
            case "B":
                alert('Evento escogido: Desfile Semana de la Primavera');
                break;
            case "C":
                alert('Evento escogido: Certamen Belleza Marina');
                break;
            default:
                alert('Este evento no existe');
                seguirComprando = false;
                break;
        }
        if (seguirComprando) {
            
            let escogido = eventos.find(evento => evento.nombre.toUpperCase() === eventoNombre);

            let eventoCantidadAdulto = Number.parseInt(prompt("¿Cuántos adultos asistirán?"));
            let eventoCantidadMenor = Number.parseInt(prompt("¿Cuántos menores asistirán?"));
            let cantidadTotal = eventoCantidadAdulto + eventoCantidadMenor;

            let totalAdulto = eventoCantidadAdulto * escogido.precioAdulto;
            alert("El total por adulto/s es: $" + totalAdulto);
            let totalMenor = eventoCantidadMenor * escogido.precioMenor;
            alert("El total por menor/es es: $" + totalMenor);
            let total = totalAdulto + totalMenor;
            alert("El total de su compra es: $" + total);

            evento.cantidad += cantidadTotal;

            const existente = carrito.some(show => show.id === evento.id);

            if (existente) {
                const eventoEnCarrito = carrito.find(show => show.id === evento.id);
                eventoEnCarrito.cantidad += eventoCantidadAdulto + eventoCantidadMenor;
                
            } else {
                evento.cantidad = eventoCantidadAdulto + eventoCantidadMenor;
                carrito.push(evento);    
            }
              
            
            seguirComprando = confirm("¿Desea seguir comprando?");       
        } 
        
    } while (seguirComprando);
}
  
const agregarEventoCarrito = (evento, eventoCantidadAdulto, eventoCantidadMenor) => {
    const eventoId = evento.id;
    
    const eventoRepetido = carrito.find(show => show.id === eventoId);
    if (!eventoRepetido) {
        evento.eventoCantidadAdulto += eventoCantidadAdulto;
        evento.eventoCantidadMenor += eventoCantidadMenor;
        carrito.push(evento); 
    } else {
        eventoRepetido.eventoCantidadAdulto += eventoCantidadAdulto;
        eventoRepetido.eventoCantidadMenor += eventoCantidadMenor;
    }
    console.log(carrito);
}

const comprar = () => {
    const eventosBaratos = confirm("¿Quisieras ver los eventos más baratos primero?");
    if (eventosBaratos) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
}
comprar();