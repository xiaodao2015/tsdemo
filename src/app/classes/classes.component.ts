import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  }
  init(){
    document.getElementById("pid").innerText="nihao";
    let con = document.getElementById("pid").innerText;
   

    console.log();
    
  }
}