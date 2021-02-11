class student
{
demo():void{

    console.log("hello");

}

}


function f4(...n1:number[]) {
    var sum:number=0;
    for (let index = 0; index < n1.length; index++) {
        // console.log(n1[index]);
        sum=sum+n1[index];
        
    }
    console.log(sum);


}

//f4(1,2,3);
function f5(j:number,i:number=2):number{
var k:number=j+i;
return k;
}

// var res:number=f5(10,5);
// console.log(res);

var mydata=function(p:number,q:number):number{
    return p+q;
}

var ans=mydata(100,200);
console.log(ans);


function acceptdata(id:number,fname:string,deptno?:number) {
    console.log(id);
    console.log(fname);
    if(deptno!=undefined)
    {
    console.log(deptno);
    }
    else{
console.log("no deptno");

    }


    
}




// acceptdata(1,"raj");



// function f1(n1:number) {
//     console.log(n1);
// }

// function f2() {
//     console.log("f2 called");
// }

// function f3(i:number,j:number):number {
//     var z:number =i+j;
//     return z;
// }
// var res:number=f3(10,20);
// console.log(res);

// f2();

// var s=new student();
// s.demo();
// f1(10);



