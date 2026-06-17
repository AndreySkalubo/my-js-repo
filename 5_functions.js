//5
{
    const greeting = name => console.log(`Hello, ${name}`)
    greeting("007")
}
//6
{
    function calculator(a, b, operator) {
        switch (operator) {
            case `+`:
                result = a + b
                break
            case `-`:
                result = a - b
                break
            case `*`:
                result = a * b
                break
            case `/`:
                result = a / b
                break
            default:
                result = `Undefined operator`
                break
        }
        return result
    }
    console.log(calculator(4, 2, "+"))
    console.log(calculator(4, 2, "-"))
    console.log(calculator(4, 2, "*"))
    console.log(calculator(4, 2, "/"))
    console.log(calculator(4, 2, ""))
}
//7
{
    function getGreetings() {
        return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"]
    }
    const getGreetings1 = function () {
        return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"]
    }
    const getGreetings2 = () => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"]
}
//8
{
    const distanceInMeters = [2, 5, 13, 44, 100]

    const distanceInFeet = distanceInMeters.map(function (i) {
        return Math.round(i * 3.28084)
    })

    console.log(distanceInFeet)
}
//9
{
    //Espresso Americano
    //large small medium
    function coffee(coffeeType, size) {
        let price = priceCalculator(size)
        let recipe = recipeBook(coffeeType)

        console.log(`    Coffee - ${coffeeType}
    Recipe - ${recipe}
    Size - ${size}
    Price - ${price}
        `)
    }
    function priceCalculator(size) {
        let price
        if (size === "large") {
            price = 10
        } else if (size === "medium") {
            price = 7
        } else if (size === "small") {
            price = 5
        } else {
            price = 0
        }
        return price
    }
    function recipeBook(coffeeType) {
        let recipe
        if (coffeeType === "Espresso") {
            recipe = "Grounded coffee beans, water"
        } else if (coffeeType === "Americano") {
            recipe = "Espresso, even more water"
        } else {
            recipe = "Undefined recipe"
        }
        return recipe
    }
    coffee("Espresso", "large")
    coffee("Americano", "medium")
}
//10
{
    const wall = 5
    const day = 3
    const night = -2

    function getSnailDays(wall, day, night) {
        let daysOfProgress = 0
        let progress = 0

        function nextDay() {
            daysOfProgress++
            progress += day

            if (progress >= wall) {
                return daysOfProgress
            }

            progress += night
            return nextDay()
        }

        return nextDay()
    }

    console.log("Улитка -", getSnailDays(wall, day, night), "дня")
}
//11
{
    function sum(arr) {
        return arr.reduce((a, e) => {
            if (typeof e === "number") {
                return a += e
            } else {
                return a
            }
        })
    }
    console.log(sum([1, 2, 34, 5, "hello"]))
}
//12
{
    const longerThanFive = arr => arr.filter(el => el.length > 5)
    console.log(longerThanFive(["wkfwkfnfk", "fwhfwhifwh", "ffff", "sss"]))
}