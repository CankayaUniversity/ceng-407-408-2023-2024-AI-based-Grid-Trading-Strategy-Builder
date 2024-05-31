import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,    private router: Router, 
    ) { 
    console.log("constructordayız")
  }


  ngOnInit(): void {
    console.log("ngonint")
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }  
    else{
      this.router.navigate(['/login']);

    }

  }

  logout(): void {
    console.log("logout")
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
