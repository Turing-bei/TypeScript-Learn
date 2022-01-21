// type annotation 类型注解
// type inference 类型推断

// 如果 TS 能够自动分析变量类型，我们就不需要做注解
// 如果 TS 无法分析变量类型，我们就需要使用类型注解

// 类型注解
let count: number;
count = 888;

// 类型推断
let luckyNumber = 888;

function getTotal(one: number, two: number) {
  return one + two;
}

const total = getTotal(4, 4);

const mian = {
  name: "白番茄",
  age: 888,
};
