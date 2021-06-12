import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    correo: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardar() {
    const data = { ...this.miFormulario.value };

    this.authService.login(data).subscribe(
      (_) => {
        this.router.navigate(["/"]);

        // this.authService.user().subscribe();

      },
      (error) => {
        let doto: string = "";
        const errArr = Object.values(error?.error?.errors);

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
