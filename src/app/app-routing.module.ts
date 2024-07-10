import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = 
[
  {path:'',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'show',component:ShowComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
