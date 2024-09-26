//src\app\app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
onLogin() {
throw new Error('Method not implemented.');
}
loginForm: any;
  constructor(private router: Router) {}

  testNavigation() {
    this.router.navigateByUrl('/login');
    console.log('Navigation attempt to /login');
  }
}

