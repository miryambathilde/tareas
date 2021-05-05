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

  constructor() { }

  ngOnInit(): void {
  }

  //este metodo se ejecutará cafa vez que el usuario agrege algo en el input del form y haga enter
  agregarTarea() {
    //crear un objeto tarea, donde la const tarea es igual a Tarea, y declaramos las propiedades nombre y estado
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //agregar el objeto tarea al array, declaramos listaTareas con el metodo push que nos permite agregar elementos al final de la lista y le pasamos tarea
    this.listaTareas.push(tarea);
    //resetear el input del formulario, aqui declaramos nombreTarea como array vacío
    this.nombreTarea = '';
  }

}
