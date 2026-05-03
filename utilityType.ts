// Utility Types

// * Pick

type Product = {
  id: string;
  price: string;
  stock: number;
  color?: string;
};
// here we are only picking product id,price,stock
type ProductSummary = Pick<Product, "id" | "price" | "stock">;

// * Omit

// here we wanted product without stock key so we omit it
type ProductWithoutStock = Omit<Product, "stock">;

// * required

// everything is required
type ProductAll = Required<Product>;

const product: ProductAll = {
  color: "black",
  id: "2",
  price: "100",
  stock: 5,
};

// * partial

// partial help us to make every key option

// here Product all key became optional
type OptionalProduct = Partial<Product>;

// * Readonly

// make product readonly that's means we can;t muted it
type readonlyProduct = Readonly<Product>;

// * Record

// record help us to define something and record it

// here we have define and recorded that the emptyObj key will be string and the value can be anything
const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: "22",
  name: "Mouse",
  price: "200",
};
