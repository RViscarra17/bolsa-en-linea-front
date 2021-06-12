import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Rol } from 'src/app/admin/roles/interfaces/rol';
import { RolesService } from 'src/app/admin/roles/services/roles.service';
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
    es_admin: [ '', Validators.required],
  });

  roles: Rol[] = []; 

  // usuario: Usuario = this.miFormulario.value;
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
    private rolService: RolesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.usuariosService.getUsuarioPorId(id)))
      .subscribe((usuario) => this.miFormulario.reset(usuario));

    this.rolService.getRoles().subscribe(
      roles => this.roles = roles
    );

    // .subscribe(usuario => console.log(usuario))

    // console.log(this.miFormulario)
  }

  guardar() {
    // const data = { ...this.miFormulario.value };
    // this.auSer.register(data).subscribe((_) => {
    //   this.router.navigate(["./login"]);
    // });
    this.usuariosService
      .actualizarUsuario(this.miFormulario.value)
      .subscribe(() => {
        this.router.navigate(['admin/usuarios']);
        this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.usuariosService.getUsuarioPorId(id)))
        .subscribe((usuario) => this.miFormulario.reset(usuario));

      });
    // console.log(this.usuario)
    // this.miFormulario.reset();
    Swal.fire({
      title: 'Registro editado!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  limpiar() {
    this.miFormulario.reset();
  }
}
