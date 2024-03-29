import { PermisosService } from "./../../services/permisos.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import Swal from "sweetalert2";
import { Rol } from "../../interfaces/rol";
import { RolesService } from "../../services/roles.service";
import { Permiso, PermisoCorto } from "../../interfaces/permiso";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.component.html",
  styleUrls: ["./agregar.component.css"],
})
export class AgregarComponent implements OnInit {
  formularioRoles: FormGroup = this.fb.group({
    id: [""],
    name: ["", Validators.required],
    display_name: ["", Validators.required],
    descripcion: ["", Validators.required],
  });

  permisos: Permiso[] = [];
  misPermisos: PermisoCorto[] = [];

  constructor(
    private rolesService: RolesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private permisosService: PermisosService
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes("editar")) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.rolesService.getRolPorId(id)))
      .subscribe((rol) => this.formularioRoles.reset(rol));

    this.permisosService.getPermisos().subscribe((data) => {
      this.permisos = data;
      // console.log(this.permisos);
      
    });

    this.permisosService.getMisPermisos().subscribe((data) => {
      // this.misPermisos = data;
      console.log(data);
      
    });
    // console.log(this.formularioRoles);
  }

  guardar() {
    if (this.formularioRoles.value.name.trim().length === 0) {
      return;
    }
    if (this.formularioRoles.value.id) {
      // Actualizar
      this.rolesService
        .actualizarRol(this.formularioRoles.value)
        .subscribe(() => {
          this.router.navigate(["admin/roles"]);
          if (!this.router.url.includes("editar")) {
            return;
          }
          this.activatedRoute.params
            .pipe(switchMap(({ id }) => this.rolesService.getRolPorId(id)))
            .subscribe((rol) => this.formularioRoles.reset(rol));
          // console.log(this.formularioRoles);
        });
      Swal.fire({
        title: "Registro editado!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      this.rolesService.agregarRol(this.formularioRoles.value).subscribe(() => {
        Swal.fire({
          title: "Registro guardado!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((_) => {
          this.router.navigate(["admin/roles"]);
        });
      });
    }
  }

  limpiar() {
    this.formularioRoles.reset();
  }
}
