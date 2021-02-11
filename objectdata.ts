import {products,Category,Calculator} from "./module1";
// import {Category} from "./products";
// import {Calculator} from "./products";
let p=new products();
p.acceptdata(101,"Tea");
p.displaydata();

let c=new Category();
c.m1();

let calci=new Calculator();
var ans:number=calci.DoAddition(10,200);
console.log(ans);
var ans:number=calci.DoSubtraction(1000,200);
console.log(ans);