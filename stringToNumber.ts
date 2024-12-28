type funcType=(n:number | string)=>number
const StringToNumber:funcType=(num)=>{
    if(typeof num==='number') return num;
    let converted=Number(num);
    if(!isNaN(converted)) return converted;
    return NaN;
}
console.log(StringToNumber('gg'));
console.log(StringToNumber(98));
console.log(StringToNumber('123'));