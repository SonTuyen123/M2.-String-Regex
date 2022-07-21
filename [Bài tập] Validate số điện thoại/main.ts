import { RegexPhone } from "./RegexPhone";

let a = new RegexPhone();

let c: string = '(84)-(78094848)';
let b: string = '(a8)-(22222222)';
console.log(a.Validate_PHONE(c));
console.log(a.Validate_PHONE(b));

