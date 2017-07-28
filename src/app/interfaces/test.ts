interface ClockInterface {
    tick();
}
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth?: number;
}

interface Square extends Shape, PenStroke {
    sideLength?: number;
    [propName: string]: any;
}
let obj = {sideLength:12,propName:"w2",color:"red"}
let square = <Square>obj;
square.color="red";
square.penWidth=12;
square.sideLength=24;