import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor() { 
    console.log("constructordayız")
  }


  ngOnInit(): void {

  }


}