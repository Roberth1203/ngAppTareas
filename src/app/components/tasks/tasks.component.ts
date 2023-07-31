import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() {}

  ngOnInit(): void {
  }

  agregarTarea() {
    /*
    1.- Crear un nuevo objeto con la tarea.
    2.- Agregar la tarea al listado.
    3.- Limpiar el formulario (input).
    */
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(index:number) {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number) {
    this.listTareas[index].estado = !tarea.estado;
  }
}
