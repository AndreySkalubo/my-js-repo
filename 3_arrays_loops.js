//1
{
    const testerPositions = [
        "Quality Assurance Engineer",
        "Software Tester",
        "Test Automation Engineer",
        "Quality Analyst",
        "QA Tester",
        "Test Engineer",
        "Quality Control Analyst",
    ]

    testerPositions.push("SDET", "Lead SDET")
    console.log(testerPositions)
}
//2
{
    const arr = [1, 2, 3, "a", "b", "c"]
    arr.at() // не изменяет
    arr.push() // изменяет
    arr.unshift() // изменяет
    arr.pop() // изменяет
    arr.shift() // изменяет
    arr.join() // не изменяет
    arr.indexOf() // не изменяет
    arr.lastIndexOf() // не изменяет
    arr.includes() // не изменяет
    arr.flat() // не изменяет
    arr.concat() // не изменяет
    arr.reverse() // изменяет
    arr.slice() // не изменяет
    arr.splice() // изменяет
    arr.copyWithin() // изменяет
}
//4
{
    const arr = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
    const arr1 = ['(', ')', '(', ')', ')']
    const arr2 = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']
    let countOpen = 0
    let countClose = 0
    let countOpenBraces = 0
    let countCloseBraces = 0
    for (let element of arr) {
        if (element === '(') {
            countOpen++
        } else if (element === ')') {
            countClose++
        }
        if (element === '{') {
            countOpenBraces++
        } else if (element === '}') {
            countCloseBraces++
        }
    }
    console.log(countOpen === countClose && countOpenBraces === countCloseBraces)
}
//5
{
    const arr = [4, 81, 3, -12, -1, 14]
    let lowest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }
    console.log(lowest)
}
//6
{
    const arr = [4, 81, 3, -12, -1, 14]
    let highest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i]
        }
    }
    console.log(highest)
}
//7
{
    const arr = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]
    let count = 0
    for (const element of arr.flat()) {
        if (typeof element === "number" || typeof element === "bigint") {
            count += element
        }
    }
    console.log(count)
}
//8
{
    for (let i = 2; i <= 10; i += 2) {
        console.log(i)
    }
}
//9
{
    const wall = 5
    const day = 3
    const night = -2
    let daysOfProgress = 0
    let progress = 0
    while (true) {
        progress += day
        daysOfProgress++
        if (progress === wall) {
            break
        }
        progress += night
    }
    console.log(daysOfProgress)
}
//10
{
    let h = 2

    for (let i = -h; i <= h; i++) {
        let line = ''
        for (let j = -h; j <= h; j++) {
            if (Math.abs(i) + Math.abs(j) <= h) {
                line += '*'
            } else {
                line += ' '
            }
        }
        console.log(line)
    }

}
//11
{
    let height = 5
    for (let i = 0; i < height; i++) {
        let line = "*"
        for (let j = 0; j < i; j++) {
            line += "**"
        }
        console.log(line)
    }
}
//12
{
    let height = 10
    for (let i = height - 1; i >= 0; i--) {
        let line = ""
        for (let j = 0; j <= i; j++) {
            line += (j + " ")
        }
        console.log(line)
    }
}
//13
{
    let height = 10
    for (let i = height - 1; i >= 0; i--) {
        let line = ""
        for (let k = height - 2; k >= i; k--) {
            line += ("  ")
        }
        for (let j = 0; j <= i; j++) {
            line += (j + " ")
        }
        console.log(line)
    }
}
//14
{
    const numbers = [1, 2, 3, 4, 5]
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            sum += numbers[i]
        }
    }
    console.log(sum)
    //Консоль выведет 6 потому что подсчет идет нечетных индексов 
    //Нечетные индексы - 1 и 3, числа под этими индексами - 2 и 4
    //2 + 4 = 6
}