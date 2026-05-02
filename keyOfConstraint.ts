// keyof:- type of operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const car: MyVehicle2 = "bike";
// console.log(car);

type User = {
  id: number;
  name: string;
  address: {
    city: string;
    postalCode: number;
  };
};

const user: User = {
  id: 20,
  name: "Jamil",
  address: {
    city: "Dhaka",
    postalCode: 1100,
  },
};
// const myId = user['id']

//! products

const product = {
  brand: "HP",
  model: "G12",
  year: 2008,
};
// *  key: keyof User = means use the User type keys like (id, name, address)
// const getProperty =  (obj: User, key: keyof User) => {
//   return obj[key];
// };

// ** Now let's use generic so that our function can be reuseable
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const res1 = getProperty(user, "name");
console.log(res1);

const res2 = getProperty(product, "year");
console.log(res2);
