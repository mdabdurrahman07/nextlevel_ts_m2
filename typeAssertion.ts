// type Assertion

let taka: any;

taka = 20;

//* here the main thing is "as"
console.log((taka as Number).toFixed());

const kgToConverter = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted Output is ${Number(value) * 1000}`;
  }
};

//! const res1 = kgToConverter(2); here the type is string | number | undefined

//* now this is only a number type(here we narrow it down to number)
const res1 = kgToConverter(2) as number;
console.log("res1: ", res1);

const res2 = kgToConverter("2 kg") as string;
console.log("res2: ", res2);

//?  concept with try catch

type customError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as customError).message);
}
