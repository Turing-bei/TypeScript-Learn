// 基础静态类型
const Count: number = 666;
const Name: string = "绿葡萄";

// 对象类型 数组类型 类类型 函数类型
const User: {
  name: string;
  age: number;
} = {
  name: "紫罗兰",
  age: 2022,
};

const Swan: string[] = ["1", "2", "3"];

class Person {}
const Hong: Person = new Person();

const sleep: () => string = () => "Swan";
