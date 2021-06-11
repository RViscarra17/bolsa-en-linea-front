import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {



  usuarios: Usuario[] = [];
  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios()
    .subscribe(usuarios => this.usuarios = usuarios);

  }
  borrarUsuario(user: Usuario) {
    Swal.fire({
      title: '¿Está seguro de eliminar?',
      text: "No podrá recuperar el registro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.borrarUsuario( user.id!)
    .subscribe(id =>console.log(id))
        Swal.fire(
          'Registro eliminado',
          'SU registro se ha eliminado correctamente',
          'success'

        )
        this.router.navigate(['admin/usuarios'])

      }

    })

    // Swal.fire({
    //   title: "Registro eliminado",
    //   icon: 'warning',
    //   confirmButtonText: 'Ok'
    // })


  }

}
