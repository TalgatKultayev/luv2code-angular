import {Shape} from "./Shape"
import {Circle} from "./Circle"
import {Rectangle} from "./Rectangle"

let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(0,0,10,15);

//declare an aarray of shapes.. initially empty

let theShapes : Shape[] =[];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let aShape of theShapes){
    console.log(aShape.getInfo());
    console.log("Area: " +aShape.calculateArea());
    console.log();
}