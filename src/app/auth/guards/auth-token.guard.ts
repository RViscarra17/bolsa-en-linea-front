import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthTokenGuard implements CanActivate {
  constructor(private auS: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.auS.user().pipe(
      tap((valido) => {
        this.auS.obtenerRol().subscribe();
        if (!valido) {
          this.router.navigateByUrl("/auth/login");
        }
      })
    );
  }
}
