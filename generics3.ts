type Person = { name: string; age?: number; city?: string };

const people: Person[] = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", city: "London" },
    { name: "Charlie" }
];

type FunctionType=<K extends keyof Person>(arr:Array<Person>,str:K)=>Array<Person>
const FilterByProperty:FunctionType=(arr,str)=>{
    const ans=arr.filter((ele)=>ele[str]!==undefined);
    return ans;
}

const peopleWithAge = FilterByProperty(people, "age");
console.log(peopleWithAge); 

const peopleWithCity = FilterByProperty(people, "city");
console.log(peopleWithCity); 

