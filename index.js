//JS null과 undefined 차이점

// null 일 경우

// 1. null을 변수에 할당 할대
let age = null; // 나이를 아직 알 수 없음(null)
// 2. 값이 조건에 맞지 않을때
function findElement(arr, target) {
    return null;
}
let result = findElement([1, 2, 3], 4);
console.log(result); // 출력 결과: null

// undefined 나올때
// 1. 변수가 선언되었지만 값을 할당받지 않을 때
let name; //변수를 선언했지만 초기화하지 않았으므로 name은 undefined
console.log(name);   //undefined

function add(a, b) {
    // return 문이 없으므로 함수는 암묵적으로 undefined를 반환
    let sum = a + b;
}

// 객체 속성에 접근할때 해당 속성이 존재하지 안을때
let myObj = { name: "John", age: 30 };
console.log(myObj.location); // 출력 결과: undefined
