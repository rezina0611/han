/**
 * 1. 배열 요소의 합을 구하는 함수
 * @description 배열 요소의 합을 구하는 함수 입니다.
 * 배열을 인자로 받아 배열 요소의 합을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열 요소의 합
 */

//for문을 통한 반복 연산
let sum = 0;
function sumArray(arr) {
  for( let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));

//forEach를 통한 연산
let sum2 = 0;
function sumArray(arr) {
  arr.forEach(element => {
    sum2 += element;
  });
  return sum2;
}
console.log(sumArray([1, 2, 3, 4]));

let sum3 = 0;
function sumArray(arr){
  arr.forEach(function(number){
    sum3 += number;
  });
  return sum3;
}
console.log(sumArray([1, 2, 3, 4]));

//reduce()를 이용한 연산
/*callback - 배열의 각 요소에 대해 실행할 함수이며 4개의 인수를 가질 수 있다. 
  accumulator - callback 함수의 반환 값을 누적한다.
  currentValue - 배열의 현재 요소
  index - 배열의 현재 요소의 인덱스
  array - 호출할 배열
  * 배열을 사용할 때는 accumulator의 initialValue(초기값)을 생략할 수 있습니다. 
  배열에서는 initialValue가 없으면 첫 번째 배열 요소를 자동으로 초기값으로 사용합니다.
  */

function sumArray(arr) {
  const sum4 = arr.reduce((acc, curr) => (acc + curr),0);
  return sum4;
}
console.log(sumArray([1, 2, 3, 4])); // 10


/**
 * 2. 배열에 특정 값이 포함되어 있는지 확인하는 함수
 * @description 배열에 특정 값이 포함되어 있는지 확인하는 함수 입니다.
 * 배열과 값을 인자로 받아 배열에 값이 포함되어 있으면 true, 아니면 false를 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {boolean} - 배열에 값이 포함되어 있으면 true, 아니면 false
 */

//배열에 특정값 포함여부 체크
function containsValue(arr, value) {
  for( let i = 0; i < arr.length; i++){
    if( arr[i] === value ) return true;
  }
  return false;
}
console.log(containsValue(["apple", "banana", "cherry"], "banana")); // true
console.log(containsValue([0, 1, 2, 3], 0)); // true
console.log(containsValue([0, 1, 2, 3], 5)); // false


/** 
 * 3. 배열에서 특정 값을 제거하는 함수
 * @description 배열에서 특정 값을 제거하는 함수 입니다.
 * 배열과 값을 인자로 받아 배열에서 값을 제거한 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {any[]} - 배열에서 값을 제거한 배열
 */

function removeValue(arr, value) {
  for( let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}
console.log(removeValue(["apple", "banana", "cherry"], "banana")); // ["apple", "cherry"]


/**
 * 4. 배열을 역순으로 만드는 함수
 * @description 배열을 역순으로 만드는 함수 입니다.
 * 배열을 인자로 받아 배열을 역순으로 만든 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @returns {any[]} - 배열을 역순으로 만든 배열
 */
let reved = [];
function reverseArray(arr) {
  for( i = arr.length-1; i >=0; i--){
    reved.push(arr[i]);
  }
  return reved;
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

//for문으로 변수 i에 배열갯수-1 대입, 변수i가 0보다크거나같을때 배열을 감소하면서
//빈배열에 맨끝부터 배열 추가 하여 배열을 리턴


/**
 * 5. 배열의 평균을 구하는 함수
 * @description 배열의 평균을 구하는 함수 입니다.
 * 배열을 인자로 받아 배열의 평균을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열의 평균
 */
let sum5 = 0;
function averageArray(arr) {
  for( let i = 0; i < arr.length; i++){
    sum5 += arr[i];
  }
  return sum5 / arr.length;
}
console.log(averageArray([1, 2, 3, 4])); // 2.5

//다른방식reduce() 메서드 사용
function solution(arr) {
  const anwer = arr.reduce((acc, curr) => {
    return acc + curr;
  },0) / arr.length;
  return anwer;
}
console.log(solution([1, 2, 3, 4]));


/**
 * 6. 배열에서 최대값을 찾는 함수
 * @description 배열에서 최대값을 찾는 함수 입니다. 배열을 인자로 받아 배열에서 최대값을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열에서 최대값
 */
let max = 0;
function findMax(arr) {
  for ( let i = 0; i < arr.length; i++){
    if( arr[i] > max ){
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 4]));








/**
 * 7. 배열을 오른쪽으로 k번 미는 함수
 * @description 배열을 오른쪽으로 k번 미는 함수 입니다. 배열과 숫자를 인자로 받아 배열을 오른쪽으로 k번 민 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @param {number} k - 숫자
 * @returns {any[]} - 배열을 오른쪽으로 k번 민 결과 배열
 */
function rotate(arr, k) {}
console.log(rotate([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

/**
 * 8. 두 배열에서 공통된 요소를 찾는 함수
 * @description 두 배열에서 공통된 요소를 찾는 함수 입니다. 두 배열을 인자로 받아 두 배열에서 공통된 요소를 반환합니다.
 * @param {any[]} arr1 - 배열
 * @param {any[]} arr2 - 배열
 * @returns {any[]} - 두 배열에서 공통된 요소를 반환
 */
function findCommonElements(arr1, arr2) {}
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
