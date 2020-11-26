# TypeScript for NodeJS - Session 1

Welcome to session 1 of the course TypeScript for NodeJS, in the session we will be covering the following topics:

- Workig with TypeScript
  - Intalling TypeScript
  - Compiling TypeScript
  - Running TypeScript
  - Setting up a TypeScript project
- Var declarations and Types
  - Declaring varaiables
  - Deffining types
  - Custom types
- Import / Exprort
- Exporting variables
- Importing variables
- Importing libraries

Hapy coding...

## How to install TypeScript

### Initializing npm project

In order to install TypeScript, we need to initialize a our NodeJS application first. We are going to pass the yes `-y` argument to create a default `package.json` file.

```bash
# Initializing npm project

npm init -y
```

### Intalling TypeScript

Once the `npm` project is initialized, we can proceed to install TypeScript as development dependency. You can install TypeScript without initialize the application.

We are going to install TypeScript as developemnt dependency into the project. As recommendation, avoid to install development dependencies as global -g.

```bash
# Installing TypeScript

npm i typescript -D
```

If you want to know what is the difference between development dependency and application dependency we recommend to read this post

#### Check TypeScript version

Once TypeScript is installed, check the version and verify you are working in the latest version that is 4.0.x

```bash
# Checking TypeScript verision -> 4.0.x

npx tsc --version
```

### Create your first TypeScript file

Since our application is going to be in TypeScript, we are going to create all the files into the source folder that will be named `src`.

Create a filed named index.ts, with the following code:

```typescript
// src/index.ts

let message = "Hello, World!";

console.log(message);
```

### How to compile TypeScript

To build TypeScript files you will be using the TypeScript Compiler `tsc`. Indeed, TypeScript Compiler is a Transpiler, because of converts (transpiles) your TypeScript code into JavaScript code.

```bash
# Compiling TypeScript file

npx tsc src/index.ts
```

You can tell to TypeScrit where to write the output file with the flag `--outDir`.

```bash
# Compiling with custom output directory

npx tsc src/index.ts --outDir dist
```

The output after executing this command is a JavaScript .js file.

### How to run TypeScript

Running TypeScript compiled files is the same as if you are running your classic JavaScript files with NodeJS.

After compiling your TypeScript files, you can run the JavaScript generated.

```bash
# Running javascirpt output

node dist/index.js
```

You can run your TypeScript files directly using third party dependencies, like `ts-node`.

```bash
# Installing ts-node

npm i ts-node -D

# Running TypeScript with ts-node

npx ts-node src/index.ts
```

The `ts-config` dependency is not for use in production, even in the development environment.

## TypeScript project

### Set up a TypeScript project

TypeScript uses a file named tsconfig.json to configure the compiler options for a project.

```json
// tsconfig.js

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "esModuleInterop": true,
    "outDir": "dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

You can create this file from scratch, or we can use the command `tsc --init`.

```bash
# Initializing TypeScript project

npx tsc --init
```

Let’s go over some of the keys in the file:

- `module`: Specifies the module code generation method. Node uses commonjs
- `target`: Specifies the output language level.
- `moduleResolution`: Helps to compiler figure out what an import refers to. The value node mimics the Node module resolution mechanism.
- `outDir`: This is the location to output .js files after transpilation. In this tutorial you will save it as dist.

### Project Scripts

Having project scripts is a good idea to improve the development experience for your team.

You can set basic operations to your package.json:

- npm run build
- npm run build:watch
- npm run start
- npm run start:watch

```json
// package.json

{
  "scripts": {
    "build": "npx tsc",
    "build:watch": "npx tsc --watch",
    "start": "node dist/index.js",
    "start:watch": "nodemon dist/index.js"
  }
}
```

We will use `nodemon` to watch the changes in our javascript files, so you have to install it as development dependency.

```bash
# Installing nodemon

npm i nodemon -D
```

## Variable declarations and types

### How to declare vars

In TypeScript you can declare your variables as you have done it in JavaScript.

```typescript
const port = 3000;

let message = "Hello, TypeScript!";

console.log(message);
```

The behavior of `var`, `let`, and `const` TypeScript is the same as JavaScript, our recommendation to aviod the usage of `var` to prevent unexpected behavior with the scope.

### TypeScript basic types

TypeScript supports several types of variables, some of the basis types are:

The syntax to type a variable is: (let|var|const) [name]: [type] = [value];

```typescript
// Basic types

let downloads: number = 300;

let name: string = "TypeScript for Node JS";

let visible: boolean = true;

let tags: string[] = ["NodeJS", "TypeScript"];

let version: any = "1.0.0";
```

### Custom Types / Type Aliases

TypeScript allows you to create your owns types aliases. This is very useful when you want to declare a more complex type to use in your application.

```typescript
// Custom types

type Params = { version: string };
type Query = {};
type Body = { downloads: number };

const req: Request<Params, Query, Body> = new Request();
```

Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

## Import / Export

### Export

In TypeScript you can export your variables if you want to allow to be used in other files.
To export your variable you have to use the keyword `export`.

This command can be used at the time of the declaration to have a better idea if the variable is exportable or not.

You can also export your functions or data structures.

```typescript
// src/app/app.server.ts

const server = 'My HTTP server';

export initServer(port: number) {
  console.log('Server listen on port', port);
}
```

### Import

In TypeScript you can import variables defined in other files, if these were exported.

To import variables from other files you have to use the keyword `import`.

You can import every exported variable or function in the files that your importing.

```typescript
// src/index.ts

import { initServer } from "./app/app.server";

const port: number = 3000;

initServer(port);
```

### Import packages

In the same way as you import variables from files, you can import variables, functions or types from the packages that you have downloaded.

Just be careful, because not all the packages are written in TypeScript, such Express. If is the case, you can use the external package `@types` to define the types of your downloaded packages.

```bash
# Installing express

npm i express -S

# Installing types for express

npm i @types/express -D
```

```typescript
// src/app/app.server.ts

import express { Express, Router } from "express";

const app: Express = express();

export initServer(port: number) {
  app.listen(port, function() {
    console.log('Server listen on port', port);
  });
}
```
