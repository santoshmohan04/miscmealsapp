import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { mealsdata } from '../../mealsdata';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss'
})
export class ShareComponent implements OnInit {
  pickedImage:any = null;
  sharemealForm!: FormGroup;
  errorMsg:string = '';
  constructor(private fb: FormBuilder,
    private route: Router
  ){

  }

  ngOnInit(): void {
    this.sharemealForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      title: [null, Validators.required],
      summary: [null, Validators.required],
      instructions: [null, Validators.required],
    })
  }

  handleImageChange(event:any) {
    const file = event.target.files[0];

    if (!file) {
      this.pickedImage = null;
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      this.pickedImage = fileReader.result;
    };

    fileReader.readAsDataURL(file);
  }

  shareMeal(form: FormGroup) {
    if(form.invalid || !this.pickedImage){
      this.errorMsg = 'Invalid input.';
      return
    }
    const meal = {
      title: form.value.title,
      summary: form.value.summary,
      instructions: form.value.instructions,
      image: this.pickedImage,
      creator: form.value.name,
      creator_email: form.value.email,
    };
  
    this.saveMeal(meal)
  }

  saveMeal(meal:any){
    const payload = {
      title: meal.title,
      slug: meal.title,
      image: meal.image,
      summary:meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
    }

    mealsdata.push(payload);
    this.route.navigate(['/meals'])
  }
}
