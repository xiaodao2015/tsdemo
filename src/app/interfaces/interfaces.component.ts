import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function printLabel(labelledObj: { label: string }) {
      console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
  }

}
