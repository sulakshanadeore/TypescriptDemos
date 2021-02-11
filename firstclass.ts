var pi:number=3.14; //global variable

class Employee
{
empid:number=100;
empname:string="Manish";
a:boolean=true;
n1:number;
 number2:any;
 static v1:number=90;

 m1():void{
 this.n1=10;
 this.number2="Manish";
 console.log(this.number2);
 this.number2=100;
 console.log(this.number2);
 this.number2=false;
 console.log(this.number2);
 console.log(pi);
var k:number=10000;
console.log(k);


 }

 acceptData():void{
     console.log('Accepting data...');
    //  console.log(k);

 }
 showdata():string{
     console.log(this.empid);
     console.log(this.empname);
        console.log(this.a);
    return "Hello Employee";
 
}
}
var emp=new Employee();
emp.acceptData();
//var s:string=emp.showdata();
var s=emp.showdata();
console.log(s);
emp.m1();
console.log('Value of v1 as static variable' + Employee.v1);