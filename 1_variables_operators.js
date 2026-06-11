//1
{
    //Инициализация
    let firstName = "John"
    let lastName = "Adams"
    console.log(`${firstName} ${lastName}`)

    //Перезапись
    firstName = "Brandon"
    lastName = "Smith"
    console.log(`${firstName} ${lastName}`)
}

//2
{
    let a
    let c = 9
    let str = "Hi 5!"
    let b = true
    let y = 9 + "1"
    let x = "a" / 6
    console.log(`Type of a - ${typeof (a)}
Type of c - ${typeof (c)}
Type of str - ${typeof (str)}
Type of b - ${typeof (b)}
Type of y - ${typeof (y)}
Type of x - ${typeof (x)}`)
}

//3
{
    const pi = 3.1415
    const e = 2.7182
    const daysInWeek = 7
    console.log(`pi - ${pi}
e - ${e}
days in week - ${daysInWeek}`)
}

//4
{
    const b = 7
    const c = 10
    const d = 15
    const e = 20
    const f = 25
    console.log(`${b} - ${b > 10 && b < 20}`)
    console.log(`${c} - ${c > 10 && c < 20}`)
    console.log(`${d} - ${d > 10 && d < 20}`)
    console.log(`${e} - ${e > 10 && e < 20}`)
    console.log(`${f} - ${f > 10 && f < 20}`)
}
//5
//a
{
    const number = 15
    const result = number + 5
    console.log(result)
    //Будет выведено 20 как сумма number (15) и 5
}
//b
{
    const number2 = "28"
    const result = number2 + 2
    console.log(result)
    //Будет выведено 282, так как 2 будет автоматически приведено к строке
    //и будет произведена конкатенация со строкой number2 ("28")
}
//c
{
    console.log(null || 2 || undefined)
    //Будет выведено 2, так как оператор логическое ИЛИ находит первое истинное (2),
    //не-ложное (null и undefined приравниваются им к false, 0) значение и выводит его как ответ.
    //Он не будет считывать ничего после истины (например, если бы после 2 стояло 3, то ответ был бы все равно 2)
}
//d
{
    const x = 5
    const y = 10
    console.log(x > 0 && y < 20)
    //true, т.к. x (5) > 0 это истина И y (10) < 20 это истина
    console.log(x < 0 && y > 0)
    //false, т.к. x (5) < 0 это ложь, после нахождения первой лжи оператор логическое И не смотрит данные
    console.log(x < 0 && y < 0)
    //false, т.к. x (5) < 0 это ложь, после нахождения первой лжи оператор логическое И не смотрит данные,
    //значит последующее ложное выражение не имеет значения
    console.log(x > 0 && "Hello")
    //true, т.к. x (5) > 0 это истина И непустая строка "Hello" расценивается как истина
}
//e
{
    const a = 0
    const b = "World"
    console.log(a > 0 || b.length > 0)
    //true, т.к. b.length > 0 это истина, логическое ИЛИ видит a > 0 как ложь и переходит к следующему выражению
    console.log(a > 0 || b.length === 0)
    //false, т.к. оба выражения ложны
    console.log(a > 0 || "")
    //false, т.к. a (0) > 0 это ложь, пустая строка "" так же расценивается как ложь
    console.log(a < 0 || "Hello")
    //true, т.к. непустая строка "Hello" расценивается как истина, логическое ИЛИ видит a > 0 как ложь и переходит к следующему выражению
}
//f
{
    let x = 5
    let y = 10
    let z = 15
    let result = (x > y || y < z) && !(z === x)
    //Ничего не выведется, нет метода вывода в консоль
}
//6
{
    let age = 18
    let isAdult = age >= 18
    let typeOfIsAdult = typeof isAdult
    console.log(typeOfIsAdult)
    //Тип данных typeOfIsAdult - string
}
//Codewars - 1
{
    function findStrangeValue() {
        return NaN
    }
    //NaN не является конкретным значением в отличие от null и undefined, поэтому сравнение возвращает false
}
//Codewars - 2
{
    //This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
    // var a == "code"
    // var b == "wa.rs"
    // var name == a + b
    // вместо оператора сравнения == необходимо подставить оператор присваивания =
    let a = "code"
    let b = "wa.rs"
    let name = a + b
    console.log(name)
}