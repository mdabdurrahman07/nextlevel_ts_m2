# TypeScript Advance Topic

## Module 2 Mission 1

### Summary

## Topics Learned Today

### 1. **as const - Making Objects Readonly**
- `as const` makes all properties of an object readonly and creates literal types
- Used with `keyof` and `typeof` operators to extract keys as literal types
- Prevents JavaScript object value manipulation
- When keys and values are different, use `typeof Object[keyof typeof Object]` pattern
- **Example**: `const UserRoles = { Admin: "Admin" } as const;`

### 2. **Conditional Types**
- Conditional types use ternary-like syntax: `T extends Type ? TrueType : FalseType`
- Allow types to depend on conditions using the `extends` keyword
- Can be nested for multiple conditions
- **Example**: `type C = A extends null ? true : false;`

### 3. **Constraints (Generic Constraints)**
- Use `<T extends Type>` to enforce strict rules on generic types
- Ensures the generic type must satisfy the constraint
- Provides type safety and prevents invalid type usage
- **Example**: `const addStudentToCourse = <T extends Students>(studentInfo: T) => {...}`

### 4. **Enums**
- Enums are unique - they can be used as both a type AND a value
- Create a fixed set of literal values in one place
- Prevent magic strings/numbers in code
- **Example**: `enum UserRoles { Admin = "Admin", Editor = "Editor" }`

### 5. **Generics - Dynamically Generalize Types**
- Convention: Use `<T>` or descriptive names like `<Value>`
- Create reusable types that work with any type: `type Generic<T> = Array<T>`
- Can have multiple generic parameters: `type Coordinates<X, Y> = [X, Y]`
- Commonly used for arrays, tuples, and objects

### 6. **Generic Functions**
- Replace multiple similar functions with one generic function
- Syntax: `const functionName = <T>(param: T) => {...}`
- Can use multiple generics: `<X, Y>(param1: X, param2: Y)`
- Makes functions flexible and reusable

### 7. **Generic Interfaces**
- Apply generics to interfaces: `interface Developer<T, X = null> {...}`
- Can set default values for generic parameters: `<T, X = null>`
- Useful for defining complex object types that need flexibility
- **Example**: `Developer<ChinaBrand>` vs `Developer<AppleBrand>`

### 8. **keyof Operator**
- Extracts all keys from a type as a union of literal types
- `keyof Object` returns a union like `"key1" | "key2" | "key3"`
- Often combined with generics for reusable utility functions
- **Example**: `type MyKeys = keyof RichPeopleVehicle;`

### 9. **Mapped Types**
- Loop through object keys and create new types
- Syntax: `{ [key in keyof T]: NewType }`
- Can transform property types in a single definition
- Reduces code duplication when dealing with similar type patterns
- **Example**: Converting all properties to boolean or string

### 10. **Type Assertion (Type Casting)**
- Use `as` keyword to tell TypeScript the specific type
- Narrows down union types to specific types
- Useful in try-catch blocks: `(error as CustomError).message`
- Use when you know the type better than TypeScript can infer
- **Example**: `const res = getValue() as number;`

### 11. **Interface**
- Only works with object-like types (Array, Object, Function)
- Can extend other interfaces: `interface UserWithSalary extends User`
- Can define array-like objects with string indexes: `interface Friends { [index: number]: string; }`
- Can define function signatures: `interface IAdd { (num1: number, num2: number): number; }`

### 12. **Utility Types**
- **Pick<T, Keys>**: Select specific properties from a type
- **Omit<T, Keys>**: Exclude specific properties from a type
- **Required<T>**: Make all properties required
- **Partial<T>**: Make all properties optional
- **Readonly<T>**: Make all properties readonly
- **Record<Keys, Type>**: Create an object with specific keys and value type
- **Example**: `type ProductSummary = Pick<Product, "id" | "price">;`

---

### Key Patterns to Remember

1. **Generic Constraint Pattern**: `<T extends BaseType>(param: T) => ...`
2. **Extracting Keys Pattern**: `keyof typeof Object` for literal values
3. **Mapped Type Pattern**: `{ [key in keyof T]: SomeType }`
4. **Type Guard Pattern**: Use `extends` with ternary for type narrowing
5. **Utility Combo Pattern**: Combine Pick, Omit, Partial, etc. for complex types
