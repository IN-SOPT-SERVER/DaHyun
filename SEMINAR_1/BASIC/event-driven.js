const sayHello = () => console.log('hello');

const timer = () => {
    return setTimeout(() => {
        console.log('End !');
    }, 3000);    
};

sayHello();
timer();     // 3초 후 End ! 출력

