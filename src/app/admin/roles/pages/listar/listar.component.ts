import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../interfaces/rol';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  roles: Rol[] = [];

  constructor(
    private rolesService: RolesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.rolesService.getRoles()
    .subscribe(roles => this.roles = roles);
  }
  borrarRol(roles: Rol) {
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
        this.rolesService.borrarRol( roles.id!)
        .subscribe(() => {
          this.rolesService.getRoles()
          .subscribe(roles => this.roles = roles);
        });

    // .subscribe(id =>console.log(id))

        Swal.fire(
          'Registro eliminado',
          'SU registro se ha eliminado correctamente',
          'success'

        )

      }

    })

  }

}
