import { Component } from '@angular/core';
import { Globals  } from './global';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
    providers: [Globals]
})

export class RegComponent {
	
	constructor(private globals: Globals,  private router: Router) {}
	
	title = 'Register yourself';
	username : string = '';
	password : string = '';
	name : string = '';
	message : string = '';
	submitForm(form: any): void{
   
	if( this.username != '' && this.password != '' && this.name != ''){
		this.message ="Please Login";
		 this.router.navigate(['/Login']);
	}else{
		this.message ="Username or password is incorrect";
	}
	
	console.log(JSON.stringify(this.globals.users));
    console.log(form);
  }
  
}
