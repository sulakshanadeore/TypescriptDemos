class customer
{
custid:number;
custname:string;
city:string;
// constructor()
// {
//     console.log("Default");
// }

constructor(customerid:number,customername?:string,customercity?:string)
{
    this.custid=customerid;
    this.custname=customername;
    this.city=customercity;
}
showcustomerdetails():void{

    console.log(this.custid);
    console.log(this.custname);
    console.log(this.city);

}

// constructor(customerid:number,custormename:string)
// {
//     this.custid=customerid;
//     this.custname=custormename;
// }

// constructor(customercity:string,customerid:number)
// {
//     this.custid=customerid;
//     this.city=customercity;
// }



}


var cust=new customer(100,"L","Hyd");
cust.showcustomerdetails();