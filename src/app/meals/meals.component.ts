import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mealsdata } from '../mealsdata';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit, AfterViewInit {

  @ViewChild("loading") private loading!: TemplateRef<string>;
  @ViewChild("mealslist") private mealslist!: TemplateRef<string>;

  displayTemplate = signal<TemplateRef<string>>(this.loading);
  meals = mealsdata

  ngOnInit(): void {
    setTimeout(() => {
      this.displayTemplate.set(this.mealslist);
    }, 5000)
  }

  ngAfterViewInit(): void {
    this.displayTemplate.set(this.loading);
  }
  
}
