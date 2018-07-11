class Person{
    age:26;
    constructor(name,sex){
        this.name = name,
        this.sex = sex,
    }
    getName(){
        console.log(this.name + this.age);
    }
    getSex(){
        console.log(this.sex);
    }
}
var person1 = new Person('jerry','man');
person1.getName();