import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import Swal from "sweetalert2";

import { Usuario } from "../../interfaces/usuario";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuariosService
      .getUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }
  borrarUsuario(user: Usuario, event: any) {

    console.log(event.parentNode.parentNode.parentNode);
    
    Swal.fire({
      title: "¿Está seguro de eliminar?",
      text: "No podrá recuperar el registro",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.borrarUsuario(user.id!).subscribe(() => {
          this.usuariosService
          .getUsuarios()
          .subscribe((usuarios) => (this.usuarios = usuarios));
        });
        Swal.fire(
          "Registro eliminado",
          "SU registro se ha eliminado correctamente",
          "success"
          );
      }
    });
  }
}
