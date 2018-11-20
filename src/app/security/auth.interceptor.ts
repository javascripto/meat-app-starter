import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login/login.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

/**
 * Pequena descrição da classe AuthInterceptor
 * @class AuthInterceptor
 * @classdesc A classe AuthInterceptor foi feita para interceptar requisições Http injetando
 * um Header de Authorization com informando o token de acesso caso o usuario esteja logado.
 * O objeto de request é imutável, e por isso é necessário clonar o mesmo definindo um novo Header.
 * É necessário declarar a classe no provider do algum módulo angular substituindo o provider HTTP_INTERCEPTORS
 */

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * @constructor
     * @param injector é uma referencia para o mecanismo de injeção de dependencias do Angular
     * Não posso injetar o LoginService no construtor pois acontece um erro de dependencia cíclica
     * É necessario utilizar o LoginService por meio do método get do Injector
     */
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService);

        if (loginService.isLoggedIn()) {
            const authRequest = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${loginService.user.accessToken}`
                }
            });

            return next.handle(authRequest);
        } else {
            return next.handle(request);
        }
    }

}
