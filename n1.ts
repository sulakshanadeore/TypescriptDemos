export namespace n1
{
    export function f1():string {
        return "Hello World";
    }
    export class products
    {
     productid:number;
     productname:string;
    
     acceptdata(pid:number,pname:string):void{
    this.productid=pid;
    this.productname=pname;
     }
    displaydata():void{
    console.log(this.productid);
    console.log(this.productname);
    
    }
    
    
    
    
    }
    
    export class Category
    {
     categoryid:number;
     categoryname:string;
    
     m1():void{
    console.log("category data");
    
     }
    
    }
    
    interface ICalculator
    {
     DoAddition(i:number,j:number):number;
     DoSubtraction(i:number,j:number):number;
     
    }
    
    export class Calculator implements ICalculator
    {
        DoAddition(i:number,j:number):number
        {
    
            return i+j;
        }
        DoSubtraction(i:number,j:number):number{
            return i-j;
        }
    
    }

}