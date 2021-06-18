import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  get usuario() {
    return this.authSvc.usuario;
  }
  formularioDatos: FormGroup = this.fb.group({
    id: [''],
    dui: ['', [Validators.required, Validators.pattern('^[0-9]{8}[\-][0-9]$')]],
    nit: ['', [Validators.required, Validators.pattern('[^[0-9]{4}[\-][0-9]{6}[\-][0-9]{3}[\-][0-9]$]')]],
    fecha_nacimiento: ['', [Validators.required]],
    genero: ['0', Validators.required],
    viajar:['false',Validators.required],
    vehiculo:['false', Validators.required],
    residencia:['false', Validators.required],
    resumen:[''],
    id_usuario:[this.usuario.id]
  });


  constructor(
    private authSvc: AuthService,
    private datosService: DatosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.datosService.getDatoPorId(id)))
      .subscribe((dato) => this.formularioDatos.reset(dato));
    console.log(this.formularioDatos);
  }

  guardar() {
    console.log(this.formularioDatos)

    if (this.formularioDatos.value.id) {
      // Actualizar
      this.datosService
        .actualizarDato(this.formularioDatos.value)
        .subscribe(() => {
          this.router.navigate(['admin/datos']);
          if (!this.router.url.includes('editar')) {
            return;
          }
          this.activatedRoute.params
            .pipe(switchMap(({ id }) => this.datosService.getDatoPorId(id)))
            .subscribe((dato) => this.formularioDatos.reset(dato));
          console.log(this.formularioDatos);
        });
      Swal.fire({
        title: 'Registro editado!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    } else {
      this.datosService
      .agregarDato(this.formularioDatos.value)
      .subscribe(() => {
        this.router.navigate(['admin/datos']);
      });

      Swal.fire({
        title: 'Registro guardado!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }
  }

  limpiar() {
    this.formularioDatos.reset();
  }


}
