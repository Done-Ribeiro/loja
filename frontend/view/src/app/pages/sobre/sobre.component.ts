import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  texto: string = 'Localização de nossa loja';
  lat: number = -16.669466;
  lng: number = -49.235753;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
