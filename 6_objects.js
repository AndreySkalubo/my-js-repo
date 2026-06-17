//1
{
    const cars = {
        vwPassat: {
            brand: "Volkswagen",
            model: "Passat",
            year: 2002,
            colour: "grey",
            engineType: "1.6 TDI Diesel",
            transmission: "automatic"
        },
        vwGolf: {
            brand: "Volkswagen",
            model: "Golf",
            year: 1987,
            colour: "blue",
            engineType: "1.6 Gasoline",
            transmission: "manual"
        },
        rnTwingo: {
            brand: "Renault",
            model: "Twingo",
            year: 2026,
            colour: "green",
            engineType: "Electric",
            transmission: "automatic (ev)"
        }
    }
}
//2
{
    const room = {
        height: 3,
        tv: "Samsung",
        big: true
    }

    console.log(room.height, room.tv, room.big)
    console.log(typeof room.big)
    console.log(room.tv.length)
    console.log(room.tv.length - 1)
    console.log(room.tv.toUpperCase())

    room.tv = "LG"
    room.furniture = ["table", "chair", "sofa"]

    console.log(room.furniture[1])

    delete room.big
}
//3
{
    const thisDog = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`

    const dog = { name: "dog", legs: 4, color: "yellow" }

    console.log(thisDog(dog))

}
//6
{
    const developers = [
        { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
        { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
        { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
        { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
        { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
        { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
        { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
    ]
    function isJS(obj) {
        for (let key in developers) {
            if (developers[key].language.toLowerCase() === "javascript") {
                return true
            }
        }
        return false
    }
    console.log(isJS(developers))
}
//7
{
    const desserts = [
        { name: "Пирожное", price: 65 },
        { name: "Мороженое", price: 35 },
        { name: "Торт Наполеон", price: 250 },
        { name: "Песочное Печенье", price: 50 },
        { name: "Пудинг", price: 80 },
        { name: "Фруктовый Тарт", price: 40 },
        { name: "Желе Земляничное", price: 40 },
        { name: "Вафли Шоколадные", price: 36 },
        { name: "Булочка с Изюмом", price: 28 }
    ]
    let cheapest = desserts.reduce((a, e) => {
        if (e.price < a.price) {
            return e
        } else {
            return a
        }
    })
    let mostExpensive = desserts.reduce((a, e) => {
        if (e.price > a.price) {
            return e
        } else {
            return a
        }
    })
    console.log(cheapest, mostExpensive)
}
//8
{
    const library = [
        {
            author: "Стивен Кинг",
            books: [
                {
                    isbn: 9785170942472,
                    name: "Оно",
                    genre: "Ужасы, темное фэнтези",
                    releaseYear: 1986,
                    noOfPages: 1138,
                    popularity: 5,
                    firstLine: "Ужас, которому суждено было не кончаться еще двадцать восемь лет — если вообще когда-нибудь кончится, — начался, насколько я знаю или могу судить, с бумажного кораблика, плывшего по залитому дождем водосточному желобу."
                },
                {
                    isbn: 9785170801216,
                    name: "Сияние",
                    genre: "Психологический хоррор",
                    releaseYear: 1977,
                    noOfPages: 480,
                    popularity: 4,
                    firstLine: "Джек Торранс подумал: „Служливый мелкий ублюдок“."
                },
                {
                    isbn: 9785171510441,
                    name: "Зеленая миля",
                    genre: "Мистический роман, драма",
                    releaseYear: 1996,
                    noOfPages: 384,
                    popularity: 3,
                    firstLine: "В те времена, в тысяча девятьсот тридцать втором году, камеры смертников штата Луизиана еще находиছিলেন в Колд-Маунтин."
                },
                {
                    isbn: 9785170780189,
                    name: "Мертвая зона",
                    genre: "Триллер, мистика",
                    releaseYear: 1979,
                    noOfPages: 416,
                    popularity: 2,
                    firstLine: "Джонни Смит прыгнул с трамплина в пять лет и чуть не сломал себе шею."
                },
                {
                    isbn: 9785170797743,
                    name: "Кэрри",
                    genre: "Ужасы, мистика",
                    releaseYear: 1974,
                    noOfPages: 256,
                    popularity: 1,
                    firstLine: "Первого августа тысяча девятьсот шестьдесят шестого года в городе Чемберлен, штат Мэн, с неба падали камни."
                }
            ]
        },
        {
            author: "Марк Твен",
            books: [
                {
                    isbn: 9785353069270,
                    name: "Приключения Тома Сойера",
                    genre: "Приключенческая литература",
                    releaseYear: 1876,
                    noOfPages: 288,
                    popularity: 5,
                    firstLine: "Том!"
                },
                {
                    isbn: 9785699528259,
                    name: "Приключения Гекльберри Финна",
                    genre: "Приключенческий роман, сатира",
                    releaseYear: 1884,
                    noOfPages: 352,
                    popularity: 4,
                    firstLine: "Вы не читали моей биографии под названием „Приключения Тома Сойера“, но это не беда."
                },
                {
                    isbn: 9785699961056,
                    name: "Принц и нищий",
                    genre: "Исторический роман, приключения",
                    releaseYear: 1881,
                    noOfPages: 224,
                    popularity: 3,
                    firstLine: "Случилось это в ту давнюю пору, о которой у нас пойдет рассказ, в одну из пятниц осени."
                },
                {
                    isbn: 9785998502101,
                    name: "Янки из Коннектикута при дворе короля Артура",
                    genre: "Сатира, научная фантастика",
                    releaseYear: 1889,
                    noOfPages: 382,
                    popularity: 2,
                    firstLine: "Я родился и вырос в Хартфорде, штат Коннектикут, и одно время работал на оружейном заводе."
                },
                {
                    isbn: 9785389083424,
                    name: "Простофиля Вильсон",
                    genre: "Детектив, сатира",
                    releaseYear: 1894,
                    noOfPages: 224,
                    popularity: 1,
                    firstLine: "Нет ничего более раздражающего, чем хороший пример."
                }
            ]
        },
        {
            author: "Александр Пушкин",
            books: [
                {
                    isbn: 9785041065119,
                    name: "Евгений Онегин",
                    genre: "Роман в стихах",
                    releaseYear: 1833,
                    noOfPages: 224,
                    popularity: 5,
                    firstLine: "Мой дядя самых честных правил, Когда не в шутку занемог, Он уважать себя заставил И лучше выдумать не мог."
                },
                {
                    isbn: 9785090873192,
                    name: "Капитанская дочка",
                    genre: "Историческая проза, повесть",
                    releaseYear: 1836,
                    noOfPages: 160,
                    popularity: 4,
                    firstLine: "Нас было девять человек детей."
                },
                {
                    isbn: 9785699158975,
                    name: "Руслан и Людмила",
                    genre: "Поэма, сказка",
                    releaseYear: 1820,
                    noOfPages: 112,
                    popularity: 3,
                    firstLine: "Дела давно минувших дней, Преданья старины глубокой."
                },
                {
                    isbn: 9785389106826,
                    name: "Повести покойного Ивана Петровича Белкина",
                    genre: "Проза, реализм",
                    releaseYear: 1831,
                    noOfPages: 128,
                    popularity: 2,
                    firstLine: "Сей почтенный муж почти до конца жизни своей находился в том же чине..."
                },
                {
                    isbn: 9785171061738,
                    name: "Пиковая дама",
                    genre: "Повесть, мистика",
                    releaseYear: 1834,
                    noOfPages: 64,
                    popularity: 1,
                    firstLine: "В *** году играли в карты у конногвардейца Нарумова."
                }
            ]
        }
    ]

    library.forEach(el => el.books.forEach(nestedEl => console.log(nestedEl.name)))
    library.forEach(el => console.log(el.books.reduce((prevEl, nestedEl) => {
        if (prevEl.popularity < nestedEl.popularity) {
            return nestedEl
        } else {
            return prevEl
        }
    }).name))
    library.forEach(el => el.books.sort((a, b) => a.releaseYear - b.releaseYear))
    library.sort((a, b) => a.books[0].releaseYear - b.books[0].releaseYear)
}