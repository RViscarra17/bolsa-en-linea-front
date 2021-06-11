import { SpinnerInterceptor } from "./shared/interceptors/spinner.interceptor";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { HomeComponent } from "./shared/home/home.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { NavegacionComponent } from './shared/navegacion/navegacion.component';
import { BienvenidaComponent } from './shared/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    SpinnerComponent,
    NavegacionComponent,
    BienvenidaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
