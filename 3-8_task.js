//LMS
{
    const student = {
        name: "Jimmy Hopkins",
        test1: 85,
        test2: 92,
        actitvityStatus: true
    }
    function calculateGPA(...args) {
        return args.reduce((prev, curr) => prev += curr) / args.length
    }
    function checkFinalSuccess(gpa, actitvityStatus) {
        return gpa >= 90 && actitvityStatus
    }
    function generateMark(gpa) {
        switch (true) {
            case gpa >= 95: return "A"
            case gpa >= 85: return "B"
            case gpa >= 75: return "C"
            case gpa < 75: return "D"
            default: return "Undefined mark"
        }
    }
    console.log("GPA:", calculateGPA(student.test1, student.test2))
    console.log("Success:", checkFinalSuccess(calculateGPA(student.test1, student.test2), student.actitvityStatus))
    console.log("Mark:", generateMark(calculateGPA(student.test1, student.test2)))
}
//Map Set
//1
{
    function stringToMap(str) {
        const map = new Map()
        const arr = str.split(" ")
        arr.forEach((el, i, arr) => {
            let count = 0
            arr.forEach(e => {
                if (e === el) { count++ }
            })
            map.set(el, count)
        })
        console.log(map)
    }
    stringToMap("Lorem ipsum ipsum ipsum dolor sit amet")
}
//2
{
    const employeesMap = new Map()

    employeesMap.set('Алексей Иванов', 'Отдел разработки')
    employeesMap.set('Мария Смирнова', 'Отдел маркетинга')
    employeesMap.set('Дмитрий Кузнецов', 'Отдел продаж')
    employeesMap.set('Ольга Петрова', 'HR-отдел')

    const newMap = new Map()

    employeesMap.forEach((val, key) => {
        newMap.set(val, key)
    })

    console.log(newMap)
}
//3
{
    const map = new Map()

    map.set("Jimmy", 20)
    map.set("Gary", 19)
    map.set("Pete", 17)
    map.set("Zoe", 16)
    map.set("Beatrice", 20)
    map.set("Pinky", 19)
    map.set("Lola", 16)

    const mapOld = new Map()

    map.forEach((val, key) => {
        if (val >= 18) {
            mapOld.set(key, val)
        }
    })
    console.log(mapOld)
}
//4
{
    const arr = ["Jimmy", "Gary", "Gary", "Pete", "Pete"]
    const toUniqueArray = arr => [...new Set(arr)]
    console.log(toUniqueArray(arr))
}
//Деструктурирующее присваивание REST SPREAD Object
//1
{
    const arr = [10, 20, 30, 40]
    const [first, second, , fourth] = arr
    console.log(first, second, fourth)
}
//2
{
    const a = [1, 2]
    const b = [3, 4]
    const c = [5, 6]
    const arr = [...a, ...b, ...c]
    console.log(arr)
}