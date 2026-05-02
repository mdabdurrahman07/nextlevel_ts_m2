// generic  Function

//! old Method
// * in this method i have to create three function
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: string) => [value];
const createArrayUserObject = (value: { id: number; name: string }) => [value];

//? now array with generic new method
// * in this method i just need to create one function and rest of the work will do the generic type

// for any function before receiving the parameter use the <> of tuple
const arrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrSTring = arrayWithGeneric("apple");
const arrNumber = arrayWithGeneric(222);
const arrBool = arrayWithGeneric(true);

console.log(arrBool, arrNumber, arrSTring);

//! Tuple Old method

const createArrayWithTuple = (
  param1: string,
  param2: number,
  param3: { name: string; id: number },
) => [param1, param2];

// * new method

// for any function before receiving the parameter use the <> of tuple
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Jamil", 2);
const res2 = createArrayTupleWithGeneric("Apple", {
  name: "Mac OS",
  chip: "M5",
});

console.log(res1, res2);

// ? Example

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  name: "Jamil",
  id: "512",
  location: "Dhaka",
};

const result1 = addStudentToCourse(student1);

console.log(result1);
