/* 

String Declaration:

1. Sting Literal
2. Object Literal*/

//String Literal - "",'',``// String pool memory same memory allocation

let firstName = `Ravindran`;
let userName = `Ravindran`;

//String Object // Heap Memory it gets stored in two different memory address

let firstName1 = new String("Ravindran");
let userName1 = new String("Ravindran")
