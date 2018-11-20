import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) { }

    private checkAuthentication(path: string): boolean {
        const loggerdIn = this.loginService.isLoggedIn();

        if (!loggerdIn) {
            this.loginService.handleLogin(`/${path}`);
        }

        return loggerdIn;
    }

    canLoad(route: Route): boolean {
        return this.checkAuthentication(route.path);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkAuthentication(route.routeConfig.path);
    }
}
