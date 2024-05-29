import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor() { 
    console.log("constructordayız")
  }


  ngOnInit(): void {
  }


}