import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Dato } from '../../interfaces/dato';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  // date: Date= new Date
  get usuario() {
    return this.authSvc.usuario;
  }

  datos: Dato =
  {
    genero:"",
    disponibilidad_viaje: false,
    dui: "",
    fecha_nacimiento: "",
    id_usuario: Number(this.usuario.id),
    nit: "",
    posee_vehiculo: false,
    puede_cambiar_res: false,
    resumen: "",
    habilidades: [],
    id: undefined,
  }

  constructor(
    private authSvc: AuthService,
    private datosService: DatosService,
    private userService:AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // id_perfil: this.usuario.id_perfil
    this.activatedRoute.params
    .pipe(switchMap(({ id }) => this.datosService.getDatoPorId(this.usuario.id_perfil)))
    .subscribe((dato) => this.datos = (dato));
    console.log()

  }

}
