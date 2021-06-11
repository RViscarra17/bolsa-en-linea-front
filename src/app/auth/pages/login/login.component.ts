import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    correo: ["example@example.com", [Validators.required, Validators.email]],
    password: ["password", Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  guardar() {
    const data = { ...this.miFormulario.value };
    

    this.authService.login(data).subscribe(
      ( resp ) => {
        // console.log(resp);
        // console.log(this.authService.token);
        
        
        // this.authService.user().subscribe((resp) => {
        //   console.log(this.authService.usuario);
          this.router.navigate(['/admin/usuarios/prueba']);
        // });
      },
      (error) => console.log(error)
    );

    // this.miFormulario.reset();
  }
}
