//3
{
    const monthNumber = 1
    let result3 = ""

    switch (monthNumber) {
        case 1:
            result3 = "January"
            break
        case 2:
            result3 = "February"
            break
        case 3:
            result3 = "March"
            break
        case 4:
            result3 = "April"
            break
        case 5:
            result3 = "May"
            break
        case 6:
            result3 = "June"
            break
        default:
            result3 = "Undefined month"
            break
    }

    console.log(result3)
}
//4
{
    let day = "Monday"
    let message

    if (day === "Monday") {
        message = "It's Monday!"
    }
    else if (day === "Tuesday") {
        message = "It's Tuesday!"
    }
    else if (day === "Wednesday") {
        message = "It's Wednesday!"
    }
    else if (day === "Thursday") {
        message = "It's Thursday!"
    }
    else if (day === "Friday") {
        message = "It's Friday!"
    }
    else if (day === "Saturday") {
        message = "Its Sunday!"
    }
    else if (day === "Sunday") {
        message = "It's Sunday!"
    }
    else {
        message = "Invalid day!"
    }

    console.log(message)
}
//5
{
    const dayNumber = 8
    let day

    switch (dayNumber) {
        case 1:
            day = "Monday"
            break
        case 2:
            day = "Tuesday"
            break
        case 3:
            day = "Wednesday"
            break
        case 4:
            day = "Thursday"
            break
        case 5:
            day = "Friday"
            break
        case 6:
            day = "Saturday"
            break
        case 7:
            day = "Sunday"
            break
        default:
            day = "Undefined day"
            break
    }

    console.log(day)
}
//6
{
    let wantedMonth = "January"
    if (wantedMonth === "August" || wantedMonth === "July") {
        console.log("Approved")
    } else {
        console.log("Denied")
    }
}
//7
{
    let param1 = 2
    let param2 = 3
    let operator = `+`
    let result
    switch (operator) {
        case `+`:
            result = param1 + param2
            break
        case `-`:
            result = param1 - param2
            break
        case `*`:
            result = param1 * param2
            break
        case `/`:
            result = param1 / param2
            break
        default:
            result = `Undefined operator`
            break
    }
    console.log(result)
}
//8
{
    let year = 0
    if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
        console.log("Год високосный")
    } else {
        console.log("Год невисокосный")
    }
    //ИЛИ
    if (year % 400 === 0) {
        console.log("Год високосный")
    } else if (year % 100 === 0) {
        console.log("Год невисокосный")
    } else if (year % 4 === 0) {
        console.log("Год високосный")
    } else {
        console.log("Год невисокосный")
    }
    //ИЛИ
    switch (true) {
        case year % 400 === 0:
            console.log("Год високосный")
            break
        case year % 100 === 0:
            console.log("Год невисокосный")
            break
        case year % 4 === 0:
            console.log("Год високосный")
            break
        default:
            console.log("Год невисокосный")
            break
    }
}
//9
{
    //Для решения задачи предположим, что человек может быть студентом в любом возрасте кроме грудничка (и в 66, и в 9), 
    //так же предположим, что можно использовать только одну скидку
    let age = 7
    let isStudent = true
    switch (true) {
        case age < 2:
            console.log("Бесплатно")
            break
        case age < 10:
            console.log("Скидка 50%")
            break
        case age >= 65:
            console.log("Скидка 15%")
            break
        case isStudent === true:
            console.log("Скидка 10%")
            break
        default:
            console.log("Без скидки")
            break
    }
    //если каким-то образом можно иметь две скидки
    let pricePercentage = 100
    if (isStudent === true) {
        pricePercentage *= 0.9
    }
    switch (true) {
        case age < 2:
            pricePercentage = 0
            break
        case age < 10:
            pricePercentage *= 0.5
            break
        case age >= 65:
            pricePercentage *= 0.85
            break
    }
    console.log(`Скидка - ${100 - pricePercentage}%`)
}
//10
{
    const wall = 5
    const day = 3
    const night = -2
    const daysOfProgress = (wall - day) / (day + night) + 1
    console.log(`Проползет за ${daysOfProgress} дней`)
    // Поскольку после последнего дня улитка сползать не будет, отнимем этот день от высоты стены и учтем его отдельно.
    //В остальные дни прогресс улитки равен прогрессу за день, плюс регресс за ночь
}
//11
{
    let coffeeType = "Espresso" //Espresso Americano
    let size = "medium" //large small medium
    let price
    let recipe

    if (coffeeType === "Espresso") {
        recipe = "Grounded coffee beans, water"
    } else if (coffeeType === "Americano") {
        recipe = "Espresso, even more water"
    } else {
        recipe = "Undefined recipe"
    }

    if (size === "large") {
        price = 10
    } else if (size === "medium") {
        price = 7
    } else if (size === "small") {
        price = 5
    } else {
        price = 0
    }

    console.log(`    Coffee - ${coffeeType}
    Recipe - ${recipe}
    Size - ${size}
    Price - ${price}
        `)
}
//12
{
    let age
    let isMember
    let isVIP
    let attendedParties
    switch (true) {
        case age < 18:
            console.log("Kids not allowed!")
            break
        case isMember:
            console.log("Welcome, member!")
            break
        case attendedParties < 3:
            console.log("Sorry, you have visited too few parties!")
            break
        case attendedParties >= 3 && attendedParties < 5:
            console.log("Welcome")
            break
        case attendedParties >= 5:
            console.log("Welcome, you get a VIP pass")
            isVIP = true
            break
        default:
            console.log("Your data is invalid, let me check again")
            break
    }
}
