# TypeScript for NodeJS - Session 3

Welcome to session 1 of the course TypeScript for NodeJS, in the session we will be covering the following topics:

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

## Generics

Generic programming is a style of computer programming in which algorithms (or components) are written in terms of types to-be-specified-later that are then instantiated when needed for specific types provided as parameters.

```typescript
interface Node<T> {
  value: T;
  next: Node<T>;
}
```

### How to define a generic type

The generics works like the parameters in a function, these are defined in an order and they have to be provided in the same order. To define the generics you need to enclosure them between the less than and greater than symbols.

You can define as many generics as needed, and the usually defined with the letters T, S, R, ...

```typescript
class Container<T, S, R> {
  payload: T;
  transportation: S;
  label: R;
}
```


### Default type for generics

As the parameters can have a default value in a function, the generics can have a default type as well. If the developer doesn’t provide an specific type for the generic, it can have a default type to use into the the program.

```typescript
class Bag<Carry, SerialNumber = number> {
  items: Item[];
  serialNumber: SerialNumber;
}
```

### Generic over functions

You can define generics only to use in a function. They are defined in the same way as the data structure generics, the only difference is that they only work into the scope of the function.

## Database Access

Accessing to the database with TypeScript is not different from how we have been doing with JavaScript, the only difference is that now you can tell to the database drivers how the data will look like.

Here you will implement the most advanced topics that you seen on this course.

### DataService component

```typescript
// src/components/data-service.component.ts

import { Connection, Document, Model } from "mongoose";

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName);
  }

  delete() {
    // To be implemented
  }

  ferchMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  fetchOne() {
    // To be implemented
  }

  insert(data: T): Promise<string> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }

  update() {
    // To be implemented
  }
}
```
