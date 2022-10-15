// 1. 서버파트원 2-3명 소개하는 객체 만들기
const members: Server[] = [    //const members: Array<Server> 와 동일
    {
        name: '박서원',
        age: 22,
        location: '용인',
        mbti: 'INTJ',
        food: '마라탕',
        whatb: 'YB'
    },
    {
        name: '김민욱',
        age: 26,
        location: '회기',
        mbti: 'ESFJ',
        food: '치킨',
        whatb: 'OB'
    },
    {
        name: '김다현',
        age: 24,
        location: '고속터미널',
        mbti: 'ESFP',
        food: '민트초코',
        whatb: 'YB'
    }
]




//2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
interface Server {
    name: string;
    age: number;
    location: string;
    mbti: string;
    food: string;
    whatb: string;
}




//3. 파트원 소개 출력하기
members.map((member) => console.log(`이름 : ${member.name}, 나이 : ${member.age}, location : ${member.location}, mbti : ${member.mbti}, food : ${member.food}, whatb : ${member.whatb}`))
