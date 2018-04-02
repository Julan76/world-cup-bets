import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FixtureComponent} from './fixture/fixture.component';

const routes: Routes = [
  { path: '', redirectTo: '/fixture', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'fixture', component: FixtureComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
