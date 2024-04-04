let a: number = 10;
let str: string = "sujeet";
let isMarried: boolean = false;
let arr: number[] = [1, 2, 3, 4];
let arr1: string[] = ["a", "b", "c"];
let arr2: boolean[] = [true, false, false];
let tuble: [string, string, number, boolean] = ["sujeet", "kumar", 25, false];

// number enum
enum Direction1 {
  up = 1,
  down,
  left,
  right,
}

//string enum
enum Direction2 {
  east = "EAST",
  west = "WEST",
  north = "NORTH",
  south = "SOUTH",
}

// void type

interface flyable {
  fly(): void;
}

interface swimable {
  swim(): void;
}

interface Duck extends flyable, swimable {
  quack(): void;
}

const duck: Duck = {
  fly() {
    console.log("Flying");
  },
  swim() {
    console.log("swimming");
  },
  quack() {
    console.log("Quack");
  },
};

//Null and Undefined Types

let num: null = null;

let str1: undefined = undefined;

const typeScript = (a: number, b: number) => {
  number: return a + b;
};

console.log(typeScript(10, 20));

interface Details {
  fName: string;
  lName: string;
  age: number;
  phone: number;
  city: string;
  state: string;
}

const student: Details = {
  fName: "Sujeet",
  lName: "Kumar",
  age: 25,
  phone: 9102748707,
  city: "Patna",
  state: "Bihar",
};
console.log(student);
