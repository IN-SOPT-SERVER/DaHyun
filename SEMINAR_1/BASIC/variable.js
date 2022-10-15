/*   var   */  
var myName = '이다현';
console.log(`${myName} is wrong name`);

var myName = '김다현';
console.log(`My name is ${myName}`);     // var - 변수 재선언 가능


var myNames = '이다현';
myNames = '김다현';
console.log(`${myNames} !`);             // var - 변수 값 재할당 가능 




/*   let   */
let part = 'Server';
//let part = 'Serverrrrr';               // let - 변수 재선언 불가능 
console.log(`Let's go ${part}`);        


let parts = 'Server';
parts = 'Serverrrrr';
console.log(`Let's go ${part}`);         // let - 변수 값 재할당 가능 





/*  const   */
const school = 'SOPT';
//const school = 'STOP';                 // const - 변수 재선언 불가능 
console.log(`school ${part}`)



const schools = 'SOPT';
//schools = 'STOP';                      // const - 변수 값 재할당 불가능 
console.log(`school ${schools}`);