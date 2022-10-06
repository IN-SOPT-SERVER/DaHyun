/*    기본문법    */

// const 변수명: type = 초기값;
// let 변수명: type = 초기값;
const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`);

const str: string = 'hello';
console.log(`${typeof str}, ${str}`);

let num: number = 31;
console.log(`${typeof num}, ${num}`);

// const sum: number = 'sum number';




/* 배열 타입 표현  */ 
// const 변수명: 배열type = 초기값;
// let 변수명: Array<type> = 초기값;

let numbers: number[] = [1,2,3];

const strings: Array<String> = ['hi', 'hello'];

const objArray1: Object[] = [
    {item1: 'oh'},
    {item2: 'wow'}
]

const objArray2: object[] = [
    {item1: 'oh'},
    {item2: 'wow'}
]


/*  == cf ) Object vs object  == */

// object type -> 원시타입 (문자, 숫자, boolean, symbol, null, undefined) 불가능
const foo1 = (something: object): void => {
    console.log(something);
}
foo1([1,2,3]);         
foo1({a:1, b:2});
//foo1(123);            -> 원시형 숫자라 object type 불가능 
//foo1('string');       -> 원시형 문자라 object type 불가능

// Object type -> 객체 개념이어서 원시타입도 가능함 
const foo2 =(something: Object): void => {
    console.log(something);
}
foo2([1,2,3]);
foo2({a:1, b:2});
foo2(123);
foo2('string');




/*   함수 타입 표현   */
const fun = (name: string): void => console.log(`hello, ${name}`);
const sum1 = (a: number, b:number): number => a + b;
const sum2 = (a: number, b:number): number => {
    return a+b;
}

console.log(fun('다현'));
console.log(sum1(1,2));
console.log(sum2(1,2));



/*  null, undefined  */
const a: null = null;
// let oops: null = 2;
let b: undefined = undefined;
// let c: undefined = null;


/*    타입단언   */
//  angel-bracket  
let str2: any = '김다현';
let strLength: number = (<string>str2).length;
console.log(`${typeof strLength}, ${strLength}`);


//  as
let str3: any = '임창균';
let str3Length: number = (str3 as string).length;
console.log(`${typeof str3Length}, ${str3Length}`);



/*   any   */
const hmmm: any = {
    name: '김다현',
    age: 24,
    isSOPT: true,
};
console.log(`${typeof hmmm}, ${hmmm.name}`);
