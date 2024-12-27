//union,function return type,optional paramaters

/*this code performs the function of adding 2 values which can be either string or number
and calls a callback function only when both the params are number*/

type AddFunctionType=(a:number | string,b:number | string, fn?:(sum:number)=>void)=>void

const printSum=(n:number)=>console.log(n);

const add:AddFunctionType=(num1,num2,printSum)=>{
    let sum:number | string;
    if(typeof num1==='number' && typeof num2==='number'){
        sum=num1+num2;
        if(printSum) printSum(sum);
    }
    else if(typeof num1==='string' || typeof num2==='string'){
        num1=num1.toString();
        num2=num2.toString();
        sum=num1+" "+num2;
        console.log(sum);
    }
}

add(5,3,printSum);
add("piyush",21);
add(21,"piyush");
add("piyush","chowdhury");