import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddActionComponent } from './components/add-action/add-action.component';
import { DataComponent } from './components/data/data.component';


const routes: Routes = [
  { path: 'actions', component: AddActionComponent },
  { path: 'data', component: DataComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
