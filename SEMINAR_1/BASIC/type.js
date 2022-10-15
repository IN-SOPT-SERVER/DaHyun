
/* 원시타입 */

// 1. Number
// 2. String
const myName = '김다현';
console.log(`${myName} 입니다.`)
// 3. Boolean
// 4. Symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1);   //true
console.log(sym1 === sym2);   //false
console.log(sym3 === sym4);   //false
// 5. Null, Undefined


/* =======================================  */


/* 객체타입 */
// 1. Object
const user = {
    email : 'dahyun_ee@naver.com',
    name : '김다현',
    favorite : ['콘소메이징','고추바사삭','뿌링클','허니콤보'],
    introduce : function(){
        console.log(`${this.name}입니다. ${this.favorite} 좋아`);
    },
    getFavoriteFoods : function(){
        this.favorite.forEach((food) => {
            console.log(`${food} 맛있어`);
        });
    },
};
//console.log(user.introduce);                 // 속성이 함수이므로 [Function: introduce] 출력
console.log(user.introduce());                 // 김다현입니다. 콘소메이징,고추바사삭,뿌링클,허니콤보 좋아
console.log(user.getFavoriteFoods());          // 콘소메이징 맛있어 \n 고추바사삭 맛있어 \n .... 
  

// 2. Array
const arr1 = ['Hi', 10, true];
const arr2 = Array(1, null, '우와!', false, {sopt : "Server"});

arr1.map((item) => console.log('item1 : ', item));
arr2.map((item) => console.log('item2 : ', item));

// 3. Function
function sum(a, b){       //함수 선언식 -> 호이스팅의 영향 받음
    return a+b;
}
console.log(sum(1, 2));                       // 3

const sum2 = (a, b) => {   // 함수 표현식 -> 호이스팅의 영향 받지 않음
    return a+b;
};
console.log(sum2(1, 2));                      // 3


const add = (a,b) => a + b; 
console.log(add(2, 3));                        // 5
const hello = name => console.log(`${name}, hello!`);
console.log(hello('다현'));                     // 다현, hello!
const info = (name, age) => ({name, age})
console.log(info('다현',24));                   // { name: '다현', age: 24}