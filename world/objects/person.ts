interface Person {
    surname: string;
    lastname: string;
    age: number;
    isMarried: CallableFunction;
    hasChildren: CallableFunction;
    testMethod?: any;
}

export default class Character implements Person {
    surname: string;
    lastname: string;
    age: number;
    isMarried: CallableFunction;
    hasChildren: CallableFunction;
    testMethod?: any;

    constructor(surname, lastname, age, isMarried, hasChildren, testMethod) {
        this.surname = surname;
        this.lastname = lastname;
        this.age = age;
        this.isMarried = isMarried;
        this.hasChildren = hasChildren;
        this.testMethod = testMethod;
    }
}
