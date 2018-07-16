import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {UserRegistrationModule} from './user-registration/user-registration.module';
import {LoginModule} from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuard} from './core/_guards/auth.guard';
import {NgModule} from '@angular/core';
import {HttpsInterceptor} from './core/_interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserRegistrationModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
