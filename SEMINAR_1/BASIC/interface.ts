// SOPT라는 타입을 인터페이스로 정의
interface SOPT {
    name: string;
    age: number;
    isSOPT?: boolean;       // 필수적으로 필요하지 않은 프로퍼티에는 ? 붙이기 
}

const info: SOPT = {
    name: '김다현',
    age: 24,
    isSOPT: true,
    //school : 'sookmyung'
};

const infos: SOPT[] = [
    {
        name: '권세훈',
        age: 20,
        isSOPT: true,
    },
    {
        name: '강민재',
        age: 4,
       // isSOPT: true,      -> 필수적이지 않은 프로퍼티라 생략 가능 
    },
    {
        name: '남지윤',
        age: 62,
        isSOPT: false,
    },
];


infos.map((info) => console.log(`이름 : ${info.name}, 솝트 : ${info.isSOPT}`));
// 필수적이지 않은 요소인 isSOPT에 값을 적지 않으면 undefined로 뜸 
// ex) 이름 : 강민재, 솝트 : undefined
