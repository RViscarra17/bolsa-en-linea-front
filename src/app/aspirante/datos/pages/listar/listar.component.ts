import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dato } from '../../interfaces/dato';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  date: Date= new Date

  datos: Dato =
  {
    genero:"",
    disponibilidad_viaje: false,
    dui: "",
    fecha_nacimiento: "",
    id_usuario: 2,
    nit: "",
    posee_vehiculo: false,
    puede_cambiar_res: false,
    resumen: "",
    habilidades: [],
    id: undefined,
  }

  constructor(
    private datosService: DatosService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

}
