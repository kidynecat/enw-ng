import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DictindexComponent} from './dictindex/dictindex.component'

const routes: Routes = [
  { path: '', component: DictindexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
