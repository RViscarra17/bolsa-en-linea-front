import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  guardar() {
    const data = { ...this.miFormulario.value };

    this.authService.login(data).subscribe(
      ( _ ) => {
        this.authService.user().subscribe((resp) => console.log(resp));
      },
      (error) => console.log(error)
    );

    this.miFormulario.reset();
  }
}
