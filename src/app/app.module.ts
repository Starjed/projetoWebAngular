import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {TextMaskModule} from "angular2-text-mask";
import { CalculaDataComponent } from './calcula-data/calcula-data.component';
import {CommonModule, DatePipe} from "@angular/common";
import { registerLocaleData } from '@angular/common';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import ptBr from '@angular/common/locales/pt';
import { CalculaIdadeComponent } from './calcula-idade/calcula-idade.component';
import { CalculaMesesComponent } from './calcula-meses/calcula-meses.component';



registerLocaleData(ptBr)


@NgModule({
  declarations: [
    AppComponent,
    CalculaDataComponent,
    CalculaIdadeComponent,
    CalculaMesesComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    TextMaskModule,
    ReactiveFormsModule,
    CommonModule,
    DatePipe,
    WjInputModule,
  ],
  providers: [DatePipe, {provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
