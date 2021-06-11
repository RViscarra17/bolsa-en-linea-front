import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/usuario';

import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    id: [''],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    es_admin: [, Validators.required],
  });

  usuario: Usuario = this.miFormulario.value;
  // usuario: Usuario = this.miFormulario.value
  // {
  //   nombres:'',
  //   apellidos:'',
  //   correo: '',
  //   es_admin:1
  // }

  constructor(
    private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.usuariosService.getUsuarioPorId(id)))
      .subscribe((usuario) => this.miFormulario.reset(usuario));

    // .subscribe(usuario => console.log(usuario))

    // console.log(this.miFormulario)
  }

  guardar() {
    // const data = { ...this.miFormulario.value };
    // this.auSer.register(data).subscribe((_) => {
    //   this.router.navigate(["./login"]);
    // });
    if( this.miFormulario.value.nombres.trim().length === 0  ) {
      return;
    }


    // console.log(this.usuario)
    // this.miFormulario.reset();
    Swal.fire({
      title: "Registro editado!",
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.router.navigate(['admin/usuarios'])

  }
  limpiar() {
    this.miFormulario.reset();
  }


}
