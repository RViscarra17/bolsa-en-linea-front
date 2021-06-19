import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  adm = "administrador";
  pos = "postulante";
  emp = "empresa";

  get rol() {
    return this.auSvc.rol;
  }

  constructor(private router: Router, private auSvc: AuthService) { }

  ngOnInit(): void {
  }

  comparacion(rol: string) {
    return this.rol === rol ? true : false;
  }


}
