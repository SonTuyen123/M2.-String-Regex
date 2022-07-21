import { RexgexStudent } from "./RegexStudent";

let RegExpStudent = new RexgexStudent();

let c: string = 'C0318G';
let a: string = 'M0318G';
let b: string = 'P0323A';
console.log(RegExpStudent.Validate(c));
console.log(RegExpStudent.Validate(b));
console.log(RegExpStudent.Validate(a));

