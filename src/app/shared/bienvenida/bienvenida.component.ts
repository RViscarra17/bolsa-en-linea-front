import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  get usuario() {
    return this.authSvc.usuario;
  }

  get rol() {
    return this.authSvc.rol;
  }

  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
  }

}
