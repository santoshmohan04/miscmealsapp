import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MealsComponent } from './meals/meals.component';
import { CommunityComponent } from './community/community.component';
import { MealdeatilsComponent } from './meals/mealdeatils/mealdeatils.component';
import { ShareComponent } from './meals/share/share.component';

export const routes: Routes = [
    {path:'', component:MainComponent},
    {path:'meals', component:MealsComponent},
    {path:'meals/share', component:ShareComponent},
    {path:'meals/:id', component:MealdeatilsComponent},
    {path:'community', component:CommunityComponent}
];
