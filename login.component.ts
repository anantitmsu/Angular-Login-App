import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Globals  } from './global';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals]
})

export class LoginComponent {

constructor(private globals: Globals,  private router: Router) {}

  title = 'Admin';
  username : string = '';
  password : string = '';
  message : string = '';	
  
 submitForm(form: any): void{
	console.log(this.globals.users);
	var login = false;
	
	for(var i = 0; i < this.globals.users.length ; i++ ){
		var user = this.globals.users[i];
		
		if( this.username == user.username && this.password == user.password){
			this.message ="Welcome to Infidea world";
			 this.router.navigate(['/Admin']);
		}else{
			this.message ="Username or password is incorrect";
		}
		
	}
	
	
    console.log(form);
  }
}
