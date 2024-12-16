// 1. "Hello, World!"를 출력하는 함수 작성
//function sayHello() {}

function sayHello(){
    console.log("Hello, World!");
}

sayHello();
console.log(sayHello);


// 2. 두 숫자를 더하는 함수 작성
//function add(a, b) {}

function add(a,b){
    return a + b;
}

let result = add(3,4); //3과 4가 인자로 전달됨
console.log(result); //변수 result 콜솔에 7출력


// 3. 이름을 받아 'Hello name!' 을 출력하는 함수
//function greetName(name) {}

function greetName(name="Name") {
    console.log("Hello" + name + "!");
}
greetName(); // 콘솔에 "Hello Name" 출력
greetName("hanrezina"); //콘솔에 "Hello hanrezina!" 출력


// 4. a,b 두 수중 큰 숫자 반환 함수
//function getMax(a, b) {}

//if문 사용
function getMax(a, b) {
    if(a > b){   //만약 a가 b보다 클때
        return a;
    }else {
        return b;
    }
}

function getMax(a, b){
    return a > b ? a : b;
}


// 5. 짝수/홀수 판단 함수 짝수면 '짝수', 홀수면 '홀수'를 반환
//function checkEvenOdd(num) {}

//odd : 홀수,   Even : 짝수
function checkEvenOdd(num) {
    return num % 2 === 0 ? 'Even':'odd'
}
checkEvenOdd(3);   //'odd'
checkEvenOdd(6);   //'Even'


function solution(num){
    if(num % 2 == 0){
        return 'Even';
    }
    return'odd';
}
solution(3); //'odd'
solution(6); //'Even'


// 6. a,b 두 수를 곱한 값을 반환하는 화살표 함수 작성
//const multiply = () => {};

const multiply = (a, b) => {
    return  a * b;
};
console.log(multiply(3, 4)); //12


// 7. 배열의 합 구하기
//function sumArray(arr) {}

function sumArray(arr){
    let sum = 0;   // 합을 저장할 변수는 0으로 초기화
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];    // sum과 배열의 요소를 더해서 다시 sum에 저장
    }
    return sum;
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


/*
  Math.min() 메소드  값이 가장 작은 수를 반환
  Math.max() 메소드  값이 가장 큰 수를 반환
*/

/*for문 이용
let 배열 = [1,2,3,4,5,6,7,8,9,10];
let 배열의합 = 0;

for (let i = 0; i < 배열.length; i++) {
    배열의합 += 배열[i];
}
console.log(배열의합); */

/* forEach 문 이용
let 배열 = [1,2,3,4,5,6,7,8,9,10];
let 배열의합 = 0;

배열.forEach(function(item){
  배열의합 += item;
});
console.log(배열의합) //	10 출력
*/

/*reduce( ) 함수
arr.reduce(callback[, initialValue])

const 배열 = [1,2,3,4,5,6,7,8,9,10];
const sum = 배열.reduce(accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log(sum);

accumulator: 이는 이전 루프의 콜백 함수 호출 결과로 리턴된 값을 저장한 변수입니다.
currentValue: 현재 루프 돌고 있는 배열의 요소 값 입니다.
*/


// 8. 숫자 배열 중 원하는 숫자를 찾는 함수
//function (arr, target) {}

/*함수이름 findNumber(array, number)
- 첫번째 매개변수 : 배열
- 두번째 매개변수 : 숫자(찾고 싶은 숫자)
- 리턴 :  해당숫자의 인덱스
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findNumber(arr, target) {
    for (let i = 0; i < arr.length ; i++){
        if(arr[i]=== target){
            return i
        }
    }
    return -1
}

// 예제
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findNumber(numbers, 5)); // true
console.log(findNumber(numbers, 11)); // false



const arr2=  [1,2,3,4]


arr2.push(5)
// [1,2,3,4,5]

const b = arr2.pop()
// [1,2,3,4]


const arr3 = {
    0 : 1,
    1  :2 ,
    length : 2
}

let styles = ["jaxx", "Blues"]
styles.push("Rock-n-Roll");


let first = styles.pop();
styles.push("Rap");
styles.push("Reggae");