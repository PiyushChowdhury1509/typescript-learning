const MergeObjects=<U,T>(obj1:U,obj2:T):U & T=>{
    return {...obj1,...obj2};
}
const obj1={name:'Piyush'};
const obj2={age:25};
const merged = MergeObjects(obj1, obj2);
console.log(merged);