import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-tiles',
  templateUrl: './template-tiles.component.html',
  styleUrls: ['./template-tiles.component.scss']
})
export class TemplateTilesComponent implements OnInit {

  data:Array<Object> = [
    {id: 0, name: "AmeriHome"},
    {id: 1, name: "BoA"},
    {id: 2, name: "Caliber"},
    {id: 3, name: "Chase"},
    {id: 4, name: "Cenlar"},
    {id: 5, name: "Wells Fargo"},
    {id: 6, name: "Arvest Central Mortgage"},
    {id: 7, name: "BoA HELOC"},
    {id: 8, name: "BBVA Compass"},
    {id: 9, name: "Freedom Mortgage"},
    {id: 10, name: "Ditech"},
    {id: 11, name: "Dovenmuhle"},
  ];
  constructor() { }

  ngOnInit() {
  }

  TestFunction()
  {
    alert("hi");
  }
}
