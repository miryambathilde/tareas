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
  listTareas: Tarea [] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

}
