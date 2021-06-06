import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    password_confirm: ["", [Validators.required, Validators.minLength(8)]],
    role_id: ["", Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auSer: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardar() {
    const data = { ...this.miFormulario.value };
    this.auSer.register(data).subscribe((_) => {
      this.router.navigate(["./login"]);
    });

    this.miFormulario.reset();
  }
}
