import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface MenuItem {
  name: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('void', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(':enter', animate('300ms ease-in-out')),
      transition(':leave', animate('300ms ease-in-out')),
    ]),
    trigger('slideBack', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(':enter', animate('300ms ease-in-out')),
      transition(':leave', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SlideMenuComponent {
  menuItems: MenuItem[] = [
    {
      name: 'Parent 1',
      children: [
        { name: 'Child 1' },
        {
          name: 'Child 2',
          children: [{ name: 'Grandchild 1' }, { name: 'Grandchild 2' }],
        },
        {
          name: 'Child a',
          children: [{ name: 'Grandchild 1' }, { name: 'Grandchild 2' }],
        },
      ],
    },
    {
      name: 'Parent 2',
      children: [{ name: 'Child 3' }, { name: 'Child 4' }],
    },
    {
      name: 'Parent 3',
    },
  ];

  selectedItem: MenuItem | null = null;
  previousItem: MenuItem | null = null;

  selectItem(item: MenuItem) {
    if (item.children) {
      this.previousItem = this.selectedItem;
      this.selectedItem = item;
    }
  }

  deselectItem() {
    this.selectedItem = this.previousItem;
    this.previousItem = null;
  }
}
