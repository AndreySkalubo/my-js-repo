//1
{
    class Car {
        _model
        _car
        _year

        get model() { return this._model }
        set model(value) { this._model = value }
        get car() { return this._car }
        set car(value) { this._car = value }
        get year() { return this._year }
        set year(value) { this._year = value }

        constructor(model, car, year) {
            this._model = model
            this._car = car
            this._year = year
        }
    }
    class Jiga extends Car {
        _manufacturer = "Автоваз"

        _maxSpeed = 110

        constructor(_manufacturer, maxSpeed, model, car, year) {
            super(model, car, year)
            this._manufacturer = _manufacturer
            this._maxSpeed = maxSpeed
        }

        get manufacturer() { return this._manufacturer }
        set manufacturer(value) { this._manufacturer = value }
        get maxSpeed() { return this._maxSpeed }
        set maxSpeed(value) { this._maxSpeed = value }

        toString() {
            return `${this._manufacturer} ${this._car} ${this._model} ${this._year} ${this.maxSpeed}`
        }
    }
    const jiga = new Jiga("Автоваз", 110, "2106", "Жигули", 1986)
    console.log(jiga.toString())
}
//2
{
    class Shape {
        constructor(name, sides, sideLength) {
            this.name = name
            this.sides = sides
            this.sideLength = sideLength
        }
        calcPerimeter() {
            console.log(this.sides * this.sideLength)
        }
    }
    class Square extends Shape {
        calcArea() {
            return this.sideLength * this.sideLength
        }
        constructor(sideLength) {
            super()
            this.name = "Square"
            this.sides = 4
            this.sideLength = sideLength
        }
    }
    const square = new Square(5)
    console.log(square.calcArea())
    square.calcPerimeter()
}
//3
{
    class Human {
        constructor(name, age, interest) {
            if (this.constructor === Human) {
                throw new Error(`${this.constructor.name} is abstract; cannot be instantiated`)
            }
            this._name = name
            this._age = age
            this._interest = interest
        }
        info() {
            return `${this._name} ${this._age} ${this._interest}`
        }
    }
    class Yura extends Human { }
    class Katya extends Human { }

    const yura = new Yura("Юра", 27, "хокей")
    const katya = new Katya("Катя", 25, "фехтование")

    console.log(yura.info())
    console.log(katya.info())
}
//4
{
    const checkFoodType = {
        getFood(foodType, amount, brand) {
            if (!foodType && !amount && !brand) {
                console.log(`All dogs love to eat!`)
                return
            }

            if (foodType && amount && brand) {
                console.log(`Corgi Henry eats ${amount} bowls a day of ${foodType} food by ${brand}.`)
                return
            }

            if (foodType && amount) {
                console.log(`Poodle Demi eats ${amount} bowls a day of ${foodType} food.`)
                return
            }

            if (foodType) {
                console.log(`Shepherd Masha eats ${foodType} food.`)
                return
            }
        }
    }
    checkFoodType.getFood("Dry")
}
//5
{
    class User {
        #password
        #updatePassword(newPassword) {
            this.#password = newPassword
        }
        resetPassword(newPassword) {
            this.#updatePassword(newPassword)
        }
        constructor(username, password) {
            this.username = username
            this.#password = password
        }
    }
    class Admin extends User {
        isAdmin = true
        deleteUser(userToDelete) {
            return `Пользователь ${userToDelete.name} был удален`
        }
        constructor(username, password) {
            super(username, password)
        }
    }
    const users = [new User("Cucumber432", "qwerty123"), new Admin("Admin3", "dwo42neA4@")]
    console.log(users)
}
//6
{
    class Person {
        _fullName
        _age
        _gender

        get fullName() { return this._fullName }
        set fullName(value) { this._fullName = value }
        get age() { return this._age }
        set age(value) { this._age = value }
        get gender() { return this._gender }
        set gender(value) { this._gender = value }

        constructor(name, age, gender) {
            this._fullName = name
            this._age = age
            this._gender = gender
        }
    }
    class Student extends Person {
        _year
        _major
        _gpa

        get year() { return this._year }
        set year(value) { this._year = value }
        get major() { return this._major }
        set major(value) { this._major = value }
        get gpa() { return this._gpa }
        set gpa(value) { this._gpa = value }

        constructor(name, age, gender, year, major, gpa) {
            super(name, age, gender)
            this._year = year
            this._major = major
            this._gpa = gpa
        }
    }
    class Teacher extends Person {
        _workHours
        get salary() { return this._salary }
        set salary(value) { this._salary = value }
        get workHours() { return this._workHours }
        set workHours(value) { this._workHours = value }

        constructor(name, age, gender, salary, workHours) {
            super(name, age, gender)
            this._salary = salary
            this._workHours = workHours
        }
    }
    class Dean extends Teacher {
        constructor(name, age, gender, salary, workHours) {
            super(name, age, gender, salary, workHours)
            this._salary = Math.round(super.salary * 2 * (13 / 12))
        }
    }
    class Principal extends Teacher {
        constructor(name, age, gender, salary, workHours) {
            super(name, age, gender, salary, workHours)
            this._salary = Math.round(super.salary * 3 * (14 / 12))
        }
    }
    const students = [
        new Student("Jimmy Hopkins", 20, "male", 2, "chemistry", 2),
        new Student("Gary Smith", 19, "male", 1, "psychology", 3.5),
        new Student("Pete Kowalski", 18, "male", 1, "history", 4.0),
        new Student("Zoe Taylor", 21, "female", 3, "biology", 3.8),
        new Student("Beatrice Trudeau", 20, "female", 2, "medicine", 3.5),
        new Student("Pinky Gauthier", 19, "female", 1, "arts", 3.2),
        new Student("Lola Lombardi", 21, "female", 4, "sociology", 2.9),
        new Student("Derby Harrington", 22, "male", 4, "economics", 3.7),
        new Student("Chad Morris", 20, "male", 2, "sports science", 2.5),
        new Student("Earnest Jones", 19, "male", 2, "computer science", 3.9)
    ]

    const teachers = [
        new Teacher("James Kingsley", 35, "male", 10000, 40),
        new Teacher("Neil Galloway", 42, "male", 10000, 36),
        new Teacher("Edna Carvin", 50, "female", 10000, 40),
        new Teacher("Elizabeth Higgins", 29, "female", 10000, 30)
    ]

    const decans = [
        new Dean("Edward Crabblesnitch", 55, "male", 10000, 45),
        new Dean("Theresa Matthews", 48, "female", 10000, 40)
    ]

    const principal = [new Principal("Arthur Watts", 62, "male", 10000, 50)]

    const roles = [students, teachers, decans, principal]
    //People
    roles.forEach(role => role.forEach(student =>
        console.log(`${student.fullName} - ${student.constructor.name}`
        )))
    //Principal salary
    console.log(principal[0].salary)
    //Valedictorian
    console.log(students.reduce((prev, curr) => {
        if (prev.gpa > curr.gpa) {
            return prev
        } else {
            return curr
        }
    }))
}