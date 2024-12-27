//objects,array,tuple,enum

//Objects
type personType={
    name:string;
    age:number;
    nestedObject:{
        city:string;
        state:string;
    };
    skills:Array<string>
}

const Person:personType={
    name:"piyush",
    age:20,
    nestedObject:{
        city:"new delhi",
        state:"delhi",
    },
    skills:["reactjs","nextjs"]
}

console.log(Person);

//Array
type arrType=(string | number)[];
const arr:arrType=["gg",9];

console.log(arr);

//tuple
type tupleType=[number,string,boolean];
const tuple:tupleType=[21,"gg",true];

console.log(tuple);

//enum
enum Role {Admin,User};
const obj:{
    name:string;
    role:Role;
}={
    name:"piyush",
    role:Role.Admin
}

console.log(obj);  //output for role will give the index (0-indexed) of the enum
console.log(obj.role); // 0 as the admin is the the first in enum
console.log(Role[obj.role]); // "Admin" will be printed