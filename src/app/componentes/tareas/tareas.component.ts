import { Component, OnInit } from '@angular/core';
/* importamos el modelo tarea */
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  /* declaramos dos variables, lista de tareas que será un array de tareas vacío*/
  /* declaramos nombreTarea que será el array del campo input de tareas */
  listaTareas: Tarea [] = [];
  nombreTarea = '';
  tarea: any;
  index!: number;

  constructor() { }

  ngOnInit(): void {
  }
  /* METODO AGREGAR TAREA */
  //este metodo se ejecutará cada vez que el usuario agrege algo en el input del form y haga enter
  agregarTarea() {
    //crear un objeto tarea, donde la const tarea es igual a Tarea, y declaramos las propiedades nombre y estado
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //agregar el objeto tarea al array, declaramos listaTareas con el metodo push que nos permite agregar elementos al final de la lista y le pasamos tarea
    this.listaTareas.push (tarea);
    //resetear el input del formulario, aqui declaramos nombreTarea como array vacío
    this.nombreTarea = '';
  }
  /* METODO ACTUALIZAR TAREA */
  /* el metodo actualizarTarea va a recibir una tarea del tipo tarea y un index del tipo number y no devuelve nada */
  actualizarTarea (index: number, tarea: Tarea): void {
    /* del objeto listado de tarea, vamos a acceder al indice, y le vamos a decir que el estado de la tarea será el contrario al de inicio,
    es decir pasara de false, que es el que hay por defecto a TRUE*/
    this.listaTareas[index].estado = !tarea.estado
  }

  /* METODO ELIMINAR TAREA */
  /* metodo eliminar tarea al darle al icono de la papelera */
  /* el metodo va a recibir un index de tipo numero que no devuelve nada (void) */
  eliminarTarea(index: number): void {
    /* le pasamos a listaTareas el metodo splice, donde le decimos que empiece a eliminar desde indice 1 elemento */
    /*El método splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. */
    this.listaTareas.splice(index, 1);
  }

}
