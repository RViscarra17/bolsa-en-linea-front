import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
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
export class HomeGuard implements CanActivate, CanLoad {
  constructor(private auS: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.auS.auth().pipe(
      tap((valido) => {
        if (!valido) {
          this.router.navigateByUrl("/");
        }
      })
    );
  }
  
  canLoad(): Observable<boolean> | boolean {
    return this.auS.user().pipe(
      tap((valido) => {
        if (!valido) {
          this.router.navigateByUrl("/");
        }
      })
    );
  }
}
