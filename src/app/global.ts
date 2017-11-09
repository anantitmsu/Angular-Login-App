import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = 'Admin';
  username : string = 'admin';
  password : string = 'admin';
  
  users = [{username : 'admin', password : 'admin'},
			{username : 'anant', password : 'anant'}];
}