import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculaDataComponent} from "./calcula-data/calcula-data.component";
import {CalculaIdadeComponent} from "./calcula-idade/calcula-idade.component";
import {CalculaMesesComponent} from "./calcula-meses/calcula-meses.component";

const routes: Routes = [
  {path: 'calculaData', component: CalculaDataComponent},
  {path: 'calculaIdade', component: CalculaIdadeComponent},
  {path: 'calculaMeses', component: CalculaMesesComponent},
  { path: '',   redirectTo: '/calculaData', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
