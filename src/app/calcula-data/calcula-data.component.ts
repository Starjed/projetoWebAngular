import {Component, Input, OnInit} from '@angular/core';
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {matDatepickerAnimations, MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DatePipe, formatDate, getLocaleDayPeriods} from "@angular/common";
import {locale} from "yargs";

@Component({
  selector: 'app-calcula-data',
  templateUrl: './calcula-data.component.html',
  styleUrls: ['./calcula-data.component.css']
})
export class CalculaDataComponent implements OnInit {

  form: FormGroup;
  pegaData: any;
  myDate: number = Date.now();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      pegaData: new FormControl(this.pegaData)

    })
  }

  @Input() public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  }
  private formatter: DateConstructor | any ;

  ngOnInit(): void {}


  calculaData() {

    const dataInseridaString = formatDate(this.pegaData, 'dd/MM/yyyy', 'pt-PT')
    const dataAgoraString = formatDate(this.myDate, 'dd/MM/yyyy', 'pt-PT')

    let dataInserida = new Date (this.pegaData)
    let dataAgora = new Date(this.myDate)

    let calculoDosDias =  24 * 60 * 60 * 1000;
    let diferencaDeTempo = Math.abs(dataAgora.getTime() - dataInserida.getTime())

    let diferencaTotal = Math.round(diferencaDeTempo / calculoDosDias);

    alert("A diferença de dias da data inserida até a data atual é de " + diferencaTotal + " dias")

    this.form.reset();

  }

}
