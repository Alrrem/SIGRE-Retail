// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const requiredRole = next.data['requiredRole'];
    const currentRole = this.authService.getRoleValue(); 

    if (currentRole === requiredRole) {
      return true;
    } else {
      this.router.navigate(['no-access']);
      return false;
    }
  }
}
