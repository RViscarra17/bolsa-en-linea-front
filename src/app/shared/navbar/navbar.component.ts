import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auSe : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auSe.logout().subscribe(
      (resp) => {
        this.router.navigate(['/auth/login']);
      }
    )
  }

}