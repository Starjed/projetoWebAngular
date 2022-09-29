import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculaDataComponent} from "./calcula-data/calcula-data.component";

const routes: Routes = [
  {path: 'calculaData', component: CalculaDataComponent},
  { path: '',   redirectTo: '/calculaData', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
