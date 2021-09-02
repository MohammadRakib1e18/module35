// The Ways of object declaration 
//1. using object literal
const student = {name: 'sakib al hasan', job: 'cricketer'};

//2. constructor
const person = new Object();
console.log(person);

// 3. create()
const ob = Object.create(student);
console.log(typeof ob);

//4. class
class People{
    name= 'rakib';
    constructor(age){
        this.age  = age;
    }
}

const ob2 = new People(25);
console.log(ob2);
