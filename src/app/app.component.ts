import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
  title = 'Infidea';
  username : string = 'admin';
  password : string = 'admin';
  message : string = '';	
	
	
  login(username: string, password : string): void {
    
	// this.title = `Text changed to '${username}'\n '${password}'`;
	
  if(this.username == 'admin' && this.password == 'admin'){
	this.message ="Welcome to Infidea world";
  }else{
	  this.message ="Username or password is incorrect";
  }
	console.log(this.username + " "  +this.password);  
  }
  
  signalSelected (username: string){
    username = this.username
    console.log(username); // it is the value
}
}
