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
    MyOwnCustomMaterialModuleModule
  ],
  providers: [AngularFireAuth,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
