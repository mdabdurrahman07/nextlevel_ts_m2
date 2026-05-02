// * InterFace

//? before creating a interface we have to use !"interface"! keyword like and object

//! Interface only work with object type Data like "Array, Object, function"

// creating user interface
interface User {
  name: String;
  id: number;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  isAdmin: false,
  name: "Jamil",
};

//* now if we like to extend the User Interface property we can use extends

// example

interface UserWithSalary extends User {
  salary: number;
}

// here the extended version of User interface
const user2: UserWithSalary = {
  id: 2,
  isAdmin: true,
  name: "MD Abdur Rahman",
  salary: 10000,
};

// Concept

//* this interface concept is the index value is number like (0,1,2)  but the index value is string (a,b,c)
interface Friends {
  [index: number]: string;
}

const friends: Friends = ["A", "B", "C"];

// * now lets build a function interface

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;
