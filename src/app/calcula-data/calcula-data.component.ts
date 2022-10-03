import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {formatDate} from "@angular/common";

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
    public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  }

  ngOnInit(): void {}

  calculaData() {

    formatDate(this.pegaData, 'dd/MM/yyyy', 'pt-PT');
    formatDate(this.myDate, 'dd/MM/yyyy', 'pt-PT');

    let dataInserida = new Date (this.pegaData)
    let dataAgora = new Date(this.myDate)

    let calculoDosDias =  24 * 60 * 60 * 1000;
    let diferencaDeTempo = (dataAgora.getTime() - dataInserida.getTime())

    let diferencaTotal = Math.round(diferencaDeTempo / calculoDosDias);

    if (diferencaTotal < 0) {
      alert("A diferença de dias da data inserida até a data atual é de " + diferencaTotal + " dias")
    }  else {
      alert("A diferença de dias da data inserida até a data atual é de " + diferencaTotal + " dias")
    }

    this.form.reset();

    console.log(dataAgora)

  }

}
