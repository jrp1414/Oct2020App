import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private auth:AuthService,private router:Router,private messageService: MessageService,
        private primengConfig: PrimeNGConfig) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let token = localStorage.getItem("token");
        if (token) {
            this.auth.isAuthenticated = true;
            return true;
        }
        this.messageService.add({
            severity: "success",
            summary: "Test",
            detail: "Test"
          });
        this.router.navigate(["/home"]);
        return false;
    }
}