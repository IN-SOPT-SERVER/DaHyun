
if (true) {  
    var x = 'var';
}
console.log('x: ', x);      // var은 function scope여서 사용 가능함 

if (true) {
    let y = 'let';
}
//console.log('y: ', y);      // let, const는 block scope여서 error 발생 
                            // if라는 블록 {} 벗어남



function func() {
    if (true) {
        var test = 'var';
        console.log('test : ', test);
    }
    console.log('test : ', test);
}

func();                            // 정상 출력
console.log('test : ', test);      // var이 function scope 벗어나서 error 발생 





