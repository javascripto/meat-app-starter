`ng new jedi-academy --prefix=jad`
`ng g c student --spec=false`
[class.light]="true"
<jad-student name="Luke" [isJedi]="true"></jad-student>
<jad-student [student]="{ name: 'Yuri', isJedi: false }"></jad-student>
Tipos de diretivas: Componentes, Diretivas Estruturais, Diretivas de Atributos
*ngIf="", *ngFor="", [ngSwitch]="", *ngSwitchCase="", *ngSwitchDefault, [ngClass], [ngStyle], <ng-template>
[hidden]="!true", [style.backgroundColor]="'#000'", [class.active]="true"
(keydown.enter)="onKeydown($event)"
<li routerLinkActive="active"><a routerLink="about">Sobre</a></li>

async pipe  com Observable - subscribe e unsubscribe automatico
json-server relacionamento



Usando internacionalização
# 1 - Instalar pacote `intl`
 -`npm i --save intl`

# 2 - Adicionar importação no arquivo `polifills.ts`
- `import 'intl';`
- `import 'intl/locale-data/jsonp/pt-BR.js';`

# 3 - Alterar Provide `LOCALE_ID` no arquivo `app.module.ts`
- `import { LOCALE_ID } from '@angular/core';`
- ```ts
    providers: [
        ..., {
        useValue: 'pt-BR',
        provide: LOCALE_ID,
        }
]
```

Template variables
<div #asd></div>
<form #form="ngForm"></form>

<form>
    <input name="name" [ngModel]="username" #ipt="ngModel">
    <span *ngIf="ipt.invalid">Nome Invalido</span>
</form>

Validações:
    required, pattern-regex, minlength, maxlength
Classes:
    ng-valid, ng-invalid, ng-pristine, ng-dirty, ng-touched, ng-untouched

