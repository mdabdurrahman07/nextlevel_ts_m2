// map types:- loop through a array and return a new array

type AreaOfNumber = {
  height: number;
  width: number;
};
// manual approach
// type AreaOfString =  {
//     height: string
//     width: string
// }

type AreaOfString = {
  // here the key once be height in string and once be width in string (this is also a map approach)
  [key in "height" | "width"]: string;
};
//* best approach
type AreaOfBool = {
  // here the key once be height in string and once be width in string (this is also a map approach)
  [key in keyof AreaOfNumber]: boolean;
};

// next level super best approach

type Area<T> = {
  //* here the <T> the parameter we have given, example a object {height: string, width: number}
  // ! and T[key] means the get the key type example T[width] >> type is number
  [key in keyof T]: T[key];
};

const res1: Area<{ height: string; width: number }> = {
  height: "50",
  width: 20,
};
