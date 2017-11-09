import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegComponent } from './reg.component';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
   { path: '',  component: LoginComponent },
   { path: 'Register', component: RegComponent },
   { path: 'Login',  component: LoginComponent },
   { path: 'Admin',  component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent, RegComponent, LoginComponent, AdminComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule, RouterModule.forRoot(appRoutes)  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
