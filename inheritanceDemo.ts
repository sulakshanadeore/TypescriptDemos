 class Employee
{
public empid:number=100;
public empname:string="Kajal";
public salary:number=1999;

public mgrno:number;

public constructor(eid?:number,name?:string,sal?:number)
{
this.empid=eid;
this.empname=name;
this.salary=sal;

}
  showdata():void{
     console.log(this.empid);
     console.log(this.empname);
        console.log(this.salary)
}
}

 class manager extends Employee
{
  deptno:number;


  constructor(dno:number)
  {
      super();
// console.log(super.empid);
// console.log(super.empname);
// //console.log(super.salary);
  }
// this.empid
// this.empname="Prajakta";
// this.salary=10000;
//  this.mgrno=190;
// console.log(this.deptno);
// console.log(this.empid);
// console.log(this.empname);
// // console.log(this.salary);
// console.log(this.mgrno);

  }
//   /**
//    *
//    */
//   constructor(dno:number,eid?:number,name?:string,sal?:number) {
//       super(eid,name,sal);
// this.deptno=dno;    
 
//   }
  display():void{
super.showdata();
console.log(this.deptno);

  }




var mgr=new manager(10);
// mgr.display();