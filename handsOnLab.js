class TicketManager {
    #eventos = []
    #precioBaseDeGanancia = 0.15
    #id= 1

    obtenerEventos() {
        console.log(this.#eventos)
    }
  agregarEvento (
    nombre,
    lugar,
    precio,
    capacidad=50,
    fecha=new Date().toLocaleDateString ()
    ) {
      const nuevoEvento = {
       id :this.#id++,
       nombre,
       lugar,
       precio: Math.round(precio * (1 + this.#precioBaseDeGanancia)),
       capacidad,
       fecha,
       participantes: [],
      }
      this.#eventos.push(nuevoEvento)
    }
    agregarUsuario(idEvento,idUsuario){
        const evento= this.#eventos.find (event => event.id === idEvento)
        if(!evento) return console.log('No existe el evento')
        if (evento.participantes.includes(idUsuario)) return console.log ('El Usuario ya existe') 
        evento.participantes.push (idUsuario)
        return console.log('Usuario agregado')
    }
}
const TicketManager = new TicketManager()
TicketManager.obtenerEventos()
TicketManager.agregarEvento ('Coder Evento','Pereira', 500 )
