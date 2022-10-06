/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

interface Member {
    name: string;
    group: string;
    age?: number;
}

interface Dinner {
    member: Member[];
    menu: String[];
    shuffle(array: Object[]): Object[];
    organize(): void;
}

const dinner = {
    member: [
      {
        name: "권세훈",
        group: "ob",
      },
      {
        name: "김다현",
        group: "yb",
        age: 24

      },
      {
        name: "박현정",
        group: "ob",
        age: 24
      },
      {
        name: "김동재",
        group: "ob",
        age: 23

      }
    ],
    menubar: ['뿌링클', '콘소메이징', '허니콤보', '고추바사삭', '황올반반', '고추마요'],
    shuffle(array: Object[]) : Object[] {

        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize() {
      
        const memberArray: Member[] = <Member[]>this.shuffle(this.member);
        const menuArray: String[] = <String[]>this.shuffle(this.menubar);
    
    
        console.log(`${memberArray[0].name}님과 ${memberArray[1].name}님! ${menuArray[0]} 맛있게 드세요!`);
    },
  };
  
  dinner.organize();
