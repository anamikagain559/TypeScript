
# Some differences between interfaces and types in TypeScript

In TypeScript, both interface and type are used to define the structure of objects, but they differ in flexibility and usage. Types in typeScript are more flexibale and can define primitive,intersection,union,tuple or different type of data, while interface are used to describe the shape of an object.

In this article, we'll explore the key differences between interface and types in TypeScript




## What Are They?

#### Interface:

Primarily used to describe the structure of objects, especially when working with classes or object-oriented patterns.

#### Interface: 


Type: A more flexible alias that can represent not just objects, but unions, intersections, primitives, tuples, and more.



## Differences Between type and interface


#### Declaration Merging

Interface supports declaration merging.which means that you can define multiple interfaces with the same name, and TypeScript will merge them into a single interface with the combined properties and methods. 


```bash
interface A {
  x: string;
}
interface A {
  y: string;
}

const obj: A = {
  x: 'hello',
  y: 'world'
};

```
On the other hand, types do not support declaration merging. This can be helpful when you want to add extra functionality or customize existing types without modifying the original definitions or patching missing or incorrect types.

 ```bash
type A = {
  x: string;
};

// Error: Duplicate identifier
// type A = {
//   y: string;
// };


```
#### Extending Types and Interfaces

When it comes to combining types, type is more powerful than interface. You can easily create union types using the | symbol and intersection types using &. Interfaces don’t support these directly and are more limited in that regard.

##### Interface extending interface:

```bash
interface A {
  x: string;
  y: number;
}
interface B extends A {
  z: string;
}
const car: B = { x: 'x', y: 123, z: 'z' };


```
##### Type extending interface:

```bash
interface A {
  x: string;
  y: number;
}
type B = A & { j: string };

const item: B = { x: 'x', y: 123, j: 'j' };




```
#### Use with Primitives and Tuples

Only type can alias primitive types or tuples.

```bash

interface A {
  x: string;
  y: number;
}
type B = A & { j: string };

const item: B = { x: 'x', y: 123, j: 'j' };


```

#### Readability & Tooling

Interfaces tend to provide better error messages and are often preferred for public APIs and library code.

Types are more concise and flexible for advanced compositions.



## the use of enums in TypeScript

### When We use enums in TypeScript?

Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options.Enums provide a convenient way to define a set of named values and associate them with specific meaning.


### Why Use Enums?
- Improved readability: By Using Enums Named constants become easier to understand than magic numbers or hard-coded strings.

- Prevent errors: Helps avoid typos and invalid values.

- Maintainability: It's easier to make changes when everything is defined in one place.

####  String Enum Example

```bash
enum LogLevel {
  Debug = 10,
  Info,     // 11
  Warn,     // 12
  Error     // 13
}

console.log(LogLevel.Warn); // Output: 12

```

####  String Enum Example

```bash
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function getPermissions(role: Role) {
  switch (role) {
    case Role.Admin:
      return "Full Access";
    case Role.User:
      return "Limited Access";
    case Role.Guest:
      return "Read-Only Access";
  }
}

console.log(getPermissions(Role.User)); 

```



