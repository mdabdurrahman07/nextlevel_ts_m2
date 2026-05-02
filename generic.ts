//*  dynamically generalize

// ! There is a convention of using generic like  type hello<T> = Array<T>

// here we are using Array<Value> the value is changing not the Array so we can do that dynamically

type Generic<value> = Array<value>;

//? here creating a string array

// const friends: string[] = ["A", "B", "C"];

//! now creating same thing with generics

// const friends: Array<string> = ["A", "B", "C"];

const friends: Generic<string> = ["A", "B", "C"];

//? here creating a number array

// const rollNumber: number[] = [1, 2, 3];

//! now creating same thing with generics
// const rollNumber: Array<number> = [1, 2, 3];

const rollNumber: Generic<number> = [1, 2, 3];

//? create a boolean array

// const memberList: boolean[] = [true, false, true];

//! now creating same thing with generics

// const memberList: Array<boolean> = [true, false, true];

const memberList: Generic<boolean> = [true, false, true];

// ? REAL USE CASE

type Coordinates<X, Y> = [X, Y];

const Coordinates1: Coordinates<number, number> = [1, 2];
const Coordinates2: Coordinates<string, number> = ["Hello", 2];

// ? Use generic in array of object

type GenericUserList<value> = Array<value>;

const userList: GenericUserList<{
  name: string;
  age: number;
  id: number;
  isAdmin: boolean;
}> = [
  {
    name: "MR.X",
    age: 24,
    id: 1,
    isAdmin: false,
  },
  {
    name: "MR.Y",
    age: 24,
    id: 2,
    isAdmin: true,
  },
];
