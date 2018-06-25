import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proximos-rituais',
  templateUrl: './proximos-rituais.component.html',
  styleUrls: ['./proximos-rituais.component.css']
})
export class ProximosRituaisComponent implements OnInit {

  private rituais = [];

  constructor() { }

  ngOnInit() {
  }

}
