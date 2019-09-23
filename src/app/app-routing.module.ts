import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'query', component: QueryComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
