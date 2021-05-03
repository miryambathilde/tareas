export class Tarea {
  nombre: string;
  estado: boolean;

  /* constructor le decimos que va a recibir un nombre de tipo string y un estado de tipo boolean*/
  constructor(nombre: string, estado: boolean) {
    /* ahora vamos a iniciar */
    this.nombre = nombre;
    this.estado = estado;
  }
}
