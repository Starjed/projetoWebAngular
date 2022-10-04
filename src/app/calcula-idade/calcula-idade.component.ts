import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {formatDate} from "@angular/common";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-calcula-idade',
  templateUrl: './calcula-idade.component.html',
  styleUrls: ['./calcula-idade.component.css']
})
export class CalculaIdadeComponent implements OnInit {

  form: FormGroup;
  pegaData: any;
  myDate: number = Date.now();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      pegaData: new FormControl(this.pegaData)
    })
  }

  public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  }

  ngOnInit(): void {
  }

  calculaData() {

    formatDate(this.pegaData, 'yyyy/MM/DD', 'pt-PT');
    formatDate(this.myDate, 'yyyy/MM/DD', 'pt-PT');

    let dataInserida = new Date(this.pegaData)
    let dataAgora = new Date(this.myDate)

    let age = dataAgora.getFullYear() - dataInserida.getFullYear();
    const m = dataAgora.getMonth() - dataInserida.getMonth();

    if (m < 0 || (m === 0 && dataAgora.getDate() < dataInserida.getDate())) {
      age--;
    }
    if (age > 0) {
      alert("a sua idade é de " + age + " anos")
    }
    else if (age < 0) {
      alert("Você nem nasceu ainda mano")
    }
    this.form.reset();
  }
}

