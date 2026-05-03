// When a type is depend on an condition it's called conditional type

type A = null;
type B = undefined;

// null can extends null so the type c is true
type C = A extends null ? true : false;

type D = A extends number ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
    bike:string
    car: string
    ship: string
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle  ? true : false

type HasBike = CheckVehicle<"tractor">
