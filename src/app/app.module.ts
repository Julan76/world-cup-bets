import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import {UserService} from './user.service';
import { FixtureComponent } from './fixture/fixture.component';
import { HeaderComponent } from './header/header.component';
import {CompetitionService} from './competition-service/competition.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './interceptor-http-service/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FixtureComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    MyOwnCustomMaterialModuleModule,
    HttpClientModule
  ],
  providers: [AngularFireAuth, HttpClient, UserService, CompetitionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
