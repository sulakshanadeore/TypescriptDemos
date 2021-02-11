///<reference path="n1.ts"/>

import { n1 } from "./n1";

export class MyClass
{

    data1():void{
var s:string=n1.f1();
console.log(s);
}

}

var c=new MyClass();
c.data1();