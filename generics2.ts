//Ensure that if obj2 overwrites properties in obj1, the type of the overwritten properties comes from obj2.

//obj2 precedence
const MergeObjectsOmission1=<U,T>(obj1:U,obj2:T): Omit<U,keyof T> & T=>{
    return {...obj1,...obj2};
}
//obj1 precedence
const MergeObjectsOmission2=<U,T>(obj1:U,obj2:T): Omit<T,keyof U> & U=>{
    return {...obj2,...obj1};
}
const objA={name:'Piyush',age:30};
const objB={age:25,city:"delhi"};
const mergedObj = MergeObjectsOmission1(objA, objB);
console.log(mergedObj);