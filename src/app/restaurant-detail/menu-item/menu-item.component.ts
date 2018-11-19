import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'mt-menu-item',
    templateUrl: './menu-item.component.html',
    animations: [
        trigger('menuItemAppeared', [
            state('ready', style({ opacity: 1})),
            transition('void => ready', [
                style({ opacity: 1, transform: 'translateY(-20px)'}),
                animate('300ms 0s ease-in')
            ])
        ])
    ]
})
export class MenuItemComponent implements OnInit {

    public menuItemState = 'ready';

    @Input() menuItem: MenuItem;
    @Output() add = new EventEmitter<MenuItem>();

    constructor() {}

    ngOnInit() {
    }

    emitAddEvent() {
        this.add.emit(this.menuItem);
    }
}
