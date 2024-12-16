/**
 * 1. 배열 요소의 합을 구하는 함수
 * @description 배열 요소의 합을 구하는 함수 입니다. 배열을 인자로 받아 배열 요소의 합을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열 요소의 합
 */
function sumArray(arr) {}
console.log(sumArray([1, 2, 3, 4])); // 10

/**
 * 2. 배열에 특정 값이 포함되어 있는지 확인하는 함수
 * @description 배열에 특정 값이 포함되어 있는지 확인하는 함수 입니다. 배열과 값을 인자로 받아 배열에 값이 포함되어 있으면 true, 아니면 false를 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {boolean} - 배열에 값이 포함되어 있으면 true, 아니면 false
 */
function containsValue(arr, value) {}
console.log(containsValue(["apple", "banana", "cherry"], "banana")); // true

/**
 * 3. 배열에서 특정 값을 제거하는 함수
 * @description 배열에서 특정 값을 제거하는 함수 입니다. 배열과 값을 인자로 받아 배열에서 값을 제거한 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {any[]} - 배열에서 값을 제거한 배열
 */
function removeValue(arr, value) {}
console.log(removeValue(["apple", "banana", "cherry"], "banana")); // ["apple", "cherry"]

/**
 * 4. 배열을 역순으로 만드는 함수
 * @description 배열을 역순으로 만드는 함수 입니다. 배열을 인자로 받아 배열을 역순으로 만든 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @returns {any[]} - 배열을 역순으로 만든 배열
 */
function reverseArray(arr) {}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

/**
 * 5. 배열의 평균을 구하는 함수
 * @description 배열의 평균을 구하는 함수 입니다. 배열을 인자로 받아 배열의 평균을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열의 평균
 */
function averageArray(arr) {}

console.log(averageArray([1, 2, 3, 4])); // 2.5

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
