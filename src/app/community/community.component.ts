import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  perks = [
    {
      id: 1,
      title: 'Share & discover recipes',
      comment: 'A delicious meal',
      imgsrc: 'assets/icons/meal.png',
    },
    {
      id: 2,
      title: 'Find new friends & like-minded people',
      comment: 'A crowd of people, cooking',
      imgsrc: 'assets/icons/community.png',
    },
    {
      id: 3,
      title: 'Participate in exclusive events',
      comment: 'A crowd of people at a cooking event',
      imgsrc: 'assets/icons/events.png',
    },
  ];
}
