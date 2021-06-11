import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombres: ["", Validators.required],
    apellidos: ["", Validators.required],
    correo: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    password_confirmation: ["", [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private fb: FormBuilder,
    private auSer: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardar() {
    const data = { ...this.miFormulario.value };
    this.auSer.register(data).subscribe(
      (_) => {
        Swal.fire({
          title: "Registrado!",
          text: "Usuario registrado con exito",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((_) => {
          this.miFormulario.reset();
          this.router.navigate(["./login"])
        })
      },
      (error) => {
        // console.log(error.error);
        let doto: string = "";
        const errArr = Object.values(error.error.errors);

        errArr.forEach((value) => {
          doto += `<span class=\"text-danger\">${value}<br/></span>`;
        });
        Swal.fire({
          title: "Error",
          html: `${doto}`,
          icon: "error",
          cancelButtonText: "Ok",
        });
      }
    );

  }
}
