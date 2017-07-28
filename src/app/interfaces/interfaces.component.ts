import { Component, OnInit } from '@angular/core';
interface SearchFunc {
  (source: string, subString: string): boolean;
}
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):boolean;
}
@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit,ClockInterface {
  currentTime: Date;
  setTime(d: Date) :boolean{
    console.log("setTime方法执行");
    return false;
  }
  test: SearchFunc;
  constructor() { 
    
  }

  ngOnInit() {
    this.test =function(a:string,b:string):boolean{
      console.log("test方法执行");
    return false;
  }
    function printLabel(labelledObj: { label: string }) {
      console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      let newSquare = { color: "white", area: 100 };
      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }

    let mySquare = createSquare({ color: "black" });
    let p1 = {width:12,abc:12};
    let mySquare2 = createSquare(p1);
    console.log(mySquare);
    console.log(mySquare2);
    this.test("1","2");
  }
 //
  

}
