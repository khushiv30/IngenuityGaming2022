function add(x:number,y:number){
    return x+y;
}
console.log(add(5,10));




function add2(x:string,y:string):string{
    return x+y;
}
console.log(add2("5","10"));


let sub =(x:number,y:number):void=>console.log(`Result : ${x-y}`);
sub(5,12);