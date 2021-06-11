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
  formularioDatos: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    display_name: ['', Validators.required],
    descripcion: ['', Validators.required],
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
    if (this.formularioDatos.value.name.trim().length === 0) {
      return;
    }
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
