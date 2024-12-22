/**
 * 1. 배열 요소의 합을 구하는 함수
 * @description 배열 요소의 합을 구하는 함수 입니다.
 * 배열을 인자로 받아 배열 요소의 합을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열 요소의 합
 */

//for문을 통한 반복 연산
function sumArray(arr) {}
console.log(sumArray([1, 2, 3, 4]));

//forEach를 통한 연산
function sumArray(arr) {}
console.log(sumArray([1, 2, 3, 4]));

//reduce()를 이용한 연산
//arr.reduce(callback[, initialValue]);   기본구조
/*callback : 배열의 각 요소에 대해 실행할 함수이며 4개의 인수를 가질 수 있다. 
  accumulator : callback 함수의 반환 값을 누적한다.
  currentValue : 현재 기준으로 처리할 배열의 요소이다.
  array : reduce()를 호출할 배열
  */
function sumArray(arr) {}
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
function containsValue(arr, value) {}
console.log(containsValue(["apple", "banana", "cherry"], "banana")); // true
console.log(containsValue([0, 1, 2, 3], 0)); // true
console.log(containsValue([0, 1, 2, 3], 5)); // false

/*
  설명:함수 containsValue 배열, 값을 선언
      for문으로 0부터 배열의요소 갯수만큼 반복 증가
      만약 배열요소숫자와 값이 일치하면 true 반환
      일치하지 않으면 false 반환
  */

/**
 * 3. 배열에서 특정 값을 제거하는 함수
 * @description 배열에서 특정 값을 제거하는 함수 입니다.
 * 배열과 값을 인자로 받아 배열에서 값을 제거한 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {any[]} - 배열에서 값을 제거한 배열
 */

function removeValue(arr, value) {}
console.log(removeValue(["apple", "banana", "cherry"], "banana")); // ["apple", "cherry"]
// 답이 언파인드  원인을 모리겠음

/**
 * 4. 배열을 역순으로 만드는 함수
 * @description 배열을 역순으로 만드는 함수 입니다.
 * 배열을 인자로 받아 배열을 역순으로 만든 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @returns {any[]} - 배열을 역순으로 만든 배열
 */
function reverseArray(arr) {}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

/*
  * 설명 : 반복문의 시작점은 문자열의 마지막 문자 "o"의 인덱스인 (str.length - 1)
  i가 0보다 크거나 같은 한 코드는 반복적으로 수행됩니다.
  코드가 반복할 때마다 i의 값을 줄입니다
  reverse() 함수는
  배열의 요소 순서를 역순(reverse)으로 정렬하는 함수
  arr.reverse()
  
  const arr = [1, 2, 3, 4, 5];
  arr.reverse();
  console.log(arr);
  */

/**
 * 5. 배열의 평균을 구하는 함수
 * @description 배열의 평균을 구하는 함수 입니다.
 * 배열을 인자로 받아 배열의 평균을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열의 평균
 */
function averageArray(arr) {}
console.log(averageArray([1, 2, 3, 4])); // 2.5

//다른방식reduce() 메서드 사용
function solution(arr) {}
console.log(solution([1, 2, 3, 4]));

/*
  설명 : 
  1. 배열에 담긴 요소들의 합을 구한다.
  2. 요소들의 합을 배열의 길이 (=요소 갯수)로 나눈다.
  */

/**
 * 6. 배열에서 최대값을 찾는 함수
 * @description 배열에서 최대값을 찾는 함수 입니다. 배열을 인자로 받아 배열에서 최대값을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열에서 최대값
 */
function findMax(arr) {}

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
