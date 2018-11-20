import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './security/login/login.service';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NotificationService } from './shared/messages/notification.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private zone: NgZone,
                private injector: Injector,
                private notificationS: NotificationService) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            let { message } = errorResponse.error;

            message = ({
                '401' : message || 'login',
                '403' : message || 'Não autorizado',
                '404' : message || 'Recurso não encontrado, verifique o console para mais detalhes'
            })[errorResponse.status];

            if (message === 'login') {
                this.injector.get(LoginService).handleLogin();
            } 
            // forçando execução do codigo dentro de uma zona para detecção de mudanças pelo Angular
            this.zone.run(() => {
                this.notificationS.notify(message || 'Erro. Verifique sua conexão');
            })
        }
        super.handleError(errorResponse);
    }
}
