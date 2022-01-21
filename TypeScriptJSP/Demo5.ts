// 函数参数和返回类型的注解

// 函数返回值类型注解
function getTotal5(one: number, two: number): number {
  return one + two;
}

const total5 = getTotal5(1, 2);

// 无返回值类型注解
function sayHello(): void {
  console.log("Hello World");
}

// 永远循环类型注解
function forNever(): never {
  while (true) {
    console.log("Hello World");
  }
}

// 函数参数是对象类型注解
function fiveAdd({ one, two }: { one: number; two: number }) {
  return one + two;
}

const fivetotal = fiveAdd({ one: 1, two: 2 });
