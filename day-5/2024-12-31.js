/**
 *
 * 학습하느라 고생 많으셨어요! 드디어 객체 문제를 풀게 되었군요
 * 꾸준히 반복 학습하면서 객체에 대한 이해가 더욱 깊어졌으면 좋겠어요!
 *
 * 문제 유형이 달라져서 이해하기 어려우실 수 있을 것 같아요.
 * 혹시 문제가 이해가 안되신다면 언제든지 질문해주세요!
 */

/**
 * Q1: q1 객체의 name과 age의 값을 출력하세요
 *
 * 출력 : "John"
 * 출력 : "30"
 */
const q1 = { name: "John", age: 30 };
// 1번문제 코드 작성란 --

// 1번문제 코드 작성란 --

/**
 * Q2 user 객체에 name을 "Alice"로, age를 25로 추가하고 출력하세요
 *
 * 출력 : { name: "Alice", age: 25 }
 */
const user = {};
// 2번문제 코드 작성란 --

// 2번문제 코드 작성란 --
console.log(user); // 출력: { name: "Alice", age: 25 }

/**
 * Q3 item 객체에서 price 속성을 제거하고 출력하세요
 *
 * 출력 : { name: "Book", category: "Education" }
 */
const item = { name: "Book", price: 15, category: "Education" };
// 3번문제 코드 작성란 --

// 3번문제 코드 작성란 --
console.log(item); // 출력: { name: "Book", category: "Education" }

/**
 * Q4 반복문을 활용하여 fruits 객체의 모든 키와 값을 한 줄씩 출력하세요
 *
 * 출력 :
 * apple: 3
 * banana: 5
 * orange: 2
 */
const fruits = { apple: 3, banana: 5, orange: 2 };
// 4번문제 코드 작성란 --

// 4번문제 코드 작성란 --

/**
 * Q5 product 객체의 price를 80% 할인률을 적용하는 매서드 applyDiscount를 작성하세요
 *
 * 출력 : 800
 */
const product = {
  name: "Laptop",
  price: 1000,
  category: "Electronics",
  applyDiscount() {
    // 5번문제 코드 작성란 --
  },
};

product.applyDiscount();
console.log(product.price); // 800

/**
 * Q6 person 객체의 firstName과 lastName을 이용하여 getFullName 메서드를 작성하세요
 *
 * 출력 : "Jane Doe"
 */
const person = {
  firstName: "Jane",
  lastName: "Doe",
  getFullName() {
    // 6번문제 코드 작성란 --
  },
};

console.log(person.getFullName()); // Jane Doe

/**
 * Q7 items 배열을 category 속성을 기준으로 그룹화하는 함수 groupBy를 작성하세요
 *
 * 출력 : { fruit: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }], vegetable: [{ category: "vegetable", name: "carrot" }] }
 */
const items = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
];

// 7번문제 코드 작성란 --

// 7번문제 코드 작성란 --

console.log(groupBy(items, "category"));
