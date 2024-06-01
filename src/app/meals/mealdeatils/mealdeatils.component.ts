import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mealsdata } from '../../mealsdata';

@Component({
  selector: 'app-mealdeatils',
  standalone: true,
  imports: [],
  templateUrl: './mealdeatils.component.html',
  styleUrl: './mealdeatils.component.scss'
})
export class MealdeatilsComponent implements OnInit {
  meal:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.meal = mealsdata.find((t) => t.slug === id);
      if (this.meal && this.meal.instructions) {
        this.meal.instructions = this.meal.instructions.replace(/\n/g, '<br />');
      }
    });
  }
}
