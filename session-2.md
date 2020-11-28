# TypeScript for NodeJS - Session 2

Welcome to session 2 of the course TypeScript for NodeJS, in the session we will be covering the following topics:

* Functions
  * Named functions
  * Arrow functions
  * Arrow functions and context
  * Functions as a variable
  * Optional and Default Parameters
  * Type Function
* Enums
* Classes
* Interfaces

Hapy coding...


## Functions

Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

You can find the documentation about functions [here](https://www.typescriptlang.org/docs/handbook/functions.html)

### Named function

In TypeScript, you can create your functions as named functions like you ware being doing in JavaScript. You can invoke these functions in any part of the scope.

```typescript
function makeBread(quantity: number) {
  const bread = new Array(1).fill("🍞");
  return bread;
}
```

### Function as a variable

You can create a function as a variable to use in the future as a parameter for a callback, change the behavior (terrible idea) based on some criteria, or to invoke in other places of the program.

```typescript
const makeBread = function(quantity: number) {
  const bread = new Array(quantity).fill("🍞");
  return bread;
}
```

### Arrow functions

These are anonymous functions with their own special syntax that accept a fixed number of arguments, and operate in the context of their enclosing scope.

```typescript
const makeBread = (quantity: number) => {
  const bread = new Array(quantity).fill("🍞");
  return bread;
}
```

### Arrow functions and context

Unlike every other form of function, arrow functions do not have their own execution context.

```typescript
function Bakery() {
  this.bread = [];

  this.makeBread = (quantity: number) => {
    const bread = new Array(quantity).fill("🍞");
    this.bread = [...this.bread, ...bread];
    console.log(this.bread);
  }
}

new Bakery().makeBread(times);
```


### Optional parameters

You can set optional parameters to the functions.  When you want to set a parameter as optional you have to add the question mark after the name of the parameter. The following parameters after the optional parameter should be optional too.

```typescript
const makeBread = (quantity?: number) => {
  if (!quantity) quantity = 3;
  const bread = new Array(quantity).fill("🍞");
  return bread;
}
```

### Default paramters

When you are using an optional parameter, but you need at least some data in the parameter, you can set a default value for the parameters. If you define a default value, it is no longer needed to set the parameter as optional.


```typescript
const makeBread = (quantity: number = 3) => {
  const bread = new Array(quantity).fill("🍞");
  return bread;
}
```


## Asyncronus code

### Promises

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.


```typescript
// src/app/bread/bread.service.ts

let bread: string[] = [];

export const getBread = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bread);
    }, bread.length * 100);
  });
}

export const makeBread = (quantity: number) => {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      const newBread = new Array(quantity).fill("🍞");
      bread = [...bread, ...newBread];
      resolve(newBread);
    }, quantity * 100);
  });
}
```

### Async / Await

Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Basically, async functions returns a new Promise.

```typescript
// src/app/bread/handlers/get.handler.ts

import { RequestHandler, Request, Response } from "express";
import { getBread } from "../bread.service";

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const hanlder: RequestHandler[] = [
  async (req: Req, res: Res) => {
    const bread = await getBread();
    res.json(bread);
  }
];
```

## Enums

### Enum types:

* Numbers:

```typescript
// Without index they start  starts at 0
enum SugarTypes {
    BrownSugar,
    GranulatedSugar,
    CaneSugar,
    MuscovadoSugar
} 
```

* Strings

```typescript
enum MixDirections {
    BatterUp = "UP",
    BatterDown = "DOWN",
    BatterLeft = "LEFT",
    BatterRight = "RIGHT"
} 
```

* Mixed

```typescript
// NOT RECOMENDED
enum SugarTypesMixed {
    BrownSugar = 1,
    GranulatedSugar = "GRANULATED",
    CaneSugar = 2,
    MuscovadoSugar = 3
}
```

### Enum use case

You can define UNIX permissions as enum:

```typescript
enum Perm {
    UserRead     = 1 << 8, // bit 8
    UserWrite    = 1 << 7,
    UserExecute  = 1 << 6,
    GroupRead    = 1 << 5,
    GroupWrite   = 1 << 4,
    GroupExecute = 1 << 3,
    AllRead      = 1 << 2,
    AllWrite     = 1 << 1,
    AllExecute   = 1 << 0,
}
```

User can change, read and execute; everyone else can only read and execute
```typescript
assert.equal(
    Perm.UserRead | Perm.UserWrite | Perm.UserExecute |
    Perm.GroupRead | Perm.GroupExecute |
    Perm.AllRead | Perm.AllExecute,
    0o755);
```

User can read and write; group members can read; everyone can’t access at all.

```typescript
  assert.equal(
    Perm.UserRead | Perm.UserWrite | Perm.GroupRead,
    0o640);
```

## Classes

### Class Definition

```typescript
class SugarVendor {
    // properties
    phoneNumber: string;
    totalSugar: number;
    sugarPrice: number;
    name: string;

    // Constructor
    constructor(phone: string, totalSugar: number, name: string) {
        this.phoneNumber = phone;
        this.totalSugar = totalSugar;
        this.sugarPrice = 10;
        this.name = name;
    }

    // Methods
    sell(sugarQty: number): number{
        return this.totalSugar - sugarQty;
    }
}

// Create new object from class
const sugarSweetVendor = new SugarVendor("455-44", 1000, "SweetCandies");

// Call method from class
const sugarForCakes = sugarSweetVendor.sell(100);
```

### Class inheritance

```typescript
class SugarVendorContractor extends SugarVendor{
    contractorSugarPrice: number;

    constructor(phone: string, sugarPrice: number, contractorPrice: number, name: string){
        super(phone, sugarPrice, name);
        this.contractorSugarPrice = contractorPrice;
    }

    sell(sugarQty: number): number {
        return super.sell(sugarQty) - 10;
    }
}
```

### Class accessors

```typescript

// members are public by default
class Contract {
    // protected are visible only on derived classes
    protected sellerName: string;

    //private are not visible outside this class
    private seller: SugarVendor;

    // we can have readonly properties
    public readonly contractID: number;
    
    constructor(seller: SugarVendor){
        this.seller = seller;
        this.sellerName = seller.name;
        this.contractID = Math.round(+new Date()/1000);
    }
}

class SugarContract extends Contract{

    // we can also use ES6 private accessors
    #contractor: SugarVendorContractor
    
    constructor(seller: SugarVendor, contractor: SugarVendorContractor){
        super(seller);
        this.#contractor = contractor;
    }

    contractName(): string{
        return super.sellerName
    }

    get contractor(): string {
        return this.#contractor.name;
    }
}
```

## Interfaces

### If it quacks like a duck...

```typescript
interface Seller {
    name: string;
    address?: string;
    sell(qty: number): number;
}

class SugarSeller implements Seller {
    name: string;
    totalSugar: number;

    constructor(name: string, totalSugar: number){
        this.name = name;
        this.totalSugar = totalSugar;
    }

    sell(sugarQty: number): number {
        return this.totalSugar - sugarQty
    }
}

class VanillaSeller implements Seller {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    sell(qty: number): number {
        return qty;
    }
}
```

## Code exercise:

1. Define two different sellers: (Sugar & Flour)
2. Each seller must specify the types of 
ingredients they sell (types of sugar, 
types of flour, etc)
3. Define a Buyer class that accepts any 
kind of Seller and buys from them
4. Define two different kind of buyers 
(SugarBuyer, FlourBuyer) that extends the Buyer 
5. You must use Interfaces, Enums and Classes 

Snippet to test the exercise:

```typescript
function testBuyer() {
    const sugarSellerA = new SugarNewSeller("Sugar Seller A", 1000);
    const sugarSellerB = new SugarNewSeller("Sugar Seller B", 2000);
    const flourSellerA = new FlourSeller("FlourSellerA", 100);
    const sugarB = new SugarBuyer();

    sugarB.buy(sugarSellerA, 100, SugarTypes.BrownSugar);
    
    // Must show an error in the IDE
    sugarB.buy(sugarSellerB, 2999, FlourTypes.CornFlour);
    // Must show an error in the IDE
    sugarB.buy(flourSellerA, 100, SugarTypes.BrownSugar);
}
```