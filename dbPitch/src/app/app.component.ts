import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboards', url: '/Dashboards', icon: 'analytics' },
    { title: 'Menu 2', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Menu 3', url: '/folder/favorites', icon: 'heart' },
    { title: 'Menu 4', url: '/folder/archived', icon: 'archive' },
    { title: 'Menu 5', url: '/folder/trash', icon: 'trash' },
    { title: 'Menu 6', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Funcionarios', 'Friends'];
  public options = [  { title: 'Sair', url: '', icon: 'warning' },]
  constructor() {}
}
