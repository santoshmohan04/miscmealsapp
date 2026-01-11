import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  nav_data = [
    { id: 1, path: '/meals', title: 'Browse Meals' },
    { id: 2, path: '/community', title: 'Foodies Community' },
  ];
}
