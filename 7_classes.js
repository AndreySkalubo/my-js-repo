//1
{
    class Song {
        constructor(name, author) {
            this._name = name
            this._author = author
        }

        get author() { return this._author }
    }
    const song = new Song("Demons", "Starset")
    console.log(song.author)
}
//2
{
    class Shape {
        constructor(name, sides, sideLength) {
            this._name = name
            this._sides = sides
            this._sideLength = sideLength
        }
        calcPerimeter() {
            console.log(this._sides * this._sideLength)
        }
    }
    const square = new Shape("Square", 4, 5)
    square.calcPerimeter()
}
//3
{
    class Employee {
        constructor(name, age, position, salary) {
            this._name = name
            this._age = age
            this._position = position
            this._salary = salary
        }
        get age() { return this._age }
        set age(newAge) { this._age = newAge }
        get position() { return this._position }
        set position(newPosition) { this._position = newPosition }
        get salary() { return this._salary }
        set salary(newSalary) { this._salary = newSalary }
    }
}
//4
{
    class Person {
        constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
            this._firstName = firstName
            this._lastName = lastName
            this._age = age
            this._gender = gender
        }
        sayFullName() {
            return `${this._firstName} ${this._lastName}`
        }
        greetExtraTerrestrials(race) {
            return `Welcome to Planet Earth, ${race}`
        }
    }
}
//5
{
    class Author {
        _author
        _books
        get books() { return this._books }
        set books(value) { this._books = value }
        get author() { return this._author }
        set author(value) { this._author = value }
        constructor(author, books) {
            this._author = author
            this._books = books
        }
    }
    class Book {
        _isbn
        _name
        _genre
        _releaseYear
        _noOfPages
        _popularity
        _firstLine

        get isbn() { return this._isbn }
        set isbn(value) { this._isbn = value }
        get name() { return this._name }
        set name(value) { this._name = value }
        get genre() { return this._genre }
        set genre(value) { this._genre = value }
        get releaseYear() { return this._releaseYear }
        set releaseYear(value) { this._releaseYear = value }
        get noOfPages() { return this._noOfPages }
        set noOfPages(value) { this._noOfPages = value }
        get popularity() { return this._popularity }
        set popularity(value) { this._popularity = value }
        get firstLine() { return this._firstLine }
        set firstLine(value) { this._firstLine = value }

        constructor(isbn, name, genre, releaseYear, noOfPages, popularity, firstLine) {
            this._isbn = isbn
            this._name = name
            this._genre = genre
            this._releaseYear = releaseYear
            this._noOfPages = noOfPages
            this._popularity = popularity
            this._firstLine = firstLine
        }
    }
    class Library {
        _library
        get library() { return this._library }
        set library(value) { this._library = value }
        constructor(library) {
            this._library = library
        }
        logByName() {
            this._library.forEach(el => el.books.forEach(nestedEl => console.log(nestedEl.name)))
        }
        logByPopularity() {
            this._library.forEach(el => console.log(
                el.books.reduce((prevEl, nestedEl) => {
                    if (prevEl.popularity < nestedEl.popularity) {
                        return nestedEl
                    } else {
                        return prevEl
                    }
                }).name))
        }
        sortByYear() {
            this._library.forEach(el =>
                el.books.sort((a, b) =>
                    a.releaseYear - b.releaseYear
                ))
            this._library.sort((a, b) => a.books[0].releaseYear - b.books[0].releaseYear)
        }
        logReleaseYear() {
            this._library.forEach(el => el.books.forEach(nestedEl => console.log(nestedEl.releaseYear)))
        }
    }
    const authors = [
        new Author("Стивен Кинг", [
            new Book(
                9785170942472,
                "Оно",
                "Ужасы, темное фэнтези",
                1986,
                1138,
                5,
                "Ужас, которому суждено было не кончаться еще двадцать восемь лет — если вообще когда-нибудь кончится, — начался, насколько я знаю или могу судить, с бумажного кораблика, плывшего по залитому дождем водосточному желобу."
            ),
            new Book(
                9785170801216,
                "Сияние",
                "Психологический хоррор",
                1977,
                480,
                4,
                "Джек Торранс подумал: „Служливый мелкий ублюдок“."
            ),
            new Book(
                9785171510441,
                "Зеленая миля",
                "Мистический роман, драма",
                1996,
                384,
                3,
                "В те времена, в тысяча девятьсот тридцать втором году, камеры смертников штата Луизиана еще находились в Колд-Маунтин."
            ),
            new Book(
                9785170780189,
                "Мертвая зона",
                "Триллер, мистика",
                1979,
                416,
                2,
                "Джонни Смит прыгнул с трамплина в пять лет и чуть не сломал себе шею."
            ),
            new Book(
                9785170797743,
                "Кэрри",
                "Ужасы, мистика",
                1974,
                256,
                1,
                "Первого августа тысяча девятьсот шестьдесят шестого года в городе Chamberlain, штат Мэн, с неба падали камни."
            )
        ]),
        new Author("Марк Твен", [
            new Book(
                9785353069270,
                "Приключения Тома Сойера",
                "Приключенческая литература",
                1876,
                288,
                5,
                "Том!"
            ),
            new Book(
                9785699528259,
                "Приключения Гекльберри Финна",
                "Приключенческий роман, сатира",
                1884,
                352,
                4,
                "Вы не читали моей биографии под названием „Приключения Тома Сойера“, но это не беда."
            ),
            new Book(
                9785699961056,
                "Принц и нищий",
                "Исторический роман, приключения",
                1881,
                224,
                3,
                "Случилось это в ту давнюю пору, о которой у нас пойдет рассказ, в одну из пятниц осени."
            ),
            new Book(
                9785998502101,
                "Янки из Коннектикута при дворе короля Артура",
                "Сатира, научная фантастика",
                1889,
                382,
                2,
                "Я родился и вырос в Хартфорде, штат Коннектикут, и одно время работал на оружейном заводе."
            ),
            new Book(
                9785389083424,
                "Простофиля Вильсон",
                "Детектив, сатира",
                1894,
                224,
                1,
                "Нет ничего более раздражающего, чем хороший пример."
            )
        ]),
        new Author("Александр Сергеевич Пушкин", [
            new Book(
                9785041065119,
                "Евгений Онегин",
                "Роман в стихах",
                1833,
                224,
                5,
                "Мой дядя самых честных правил, Когда не в шутку занемог, Он уважать себя заставил И лучше выдумать не мог."
            ),
            new Book(
                9785090873192,
                "Капитанская дочка",
                "Историческая проза, повесть",
                1836,
                160,
                4,
                "Нас было девять человек детей."
            ),
            new Book(
                9785699158975,
                "Руслан и Людмила",
                "Поэма, сказка",
                1820,
                112,
                3,
                "Дела давно минувших дней, Преданья старины глубокой."
            ),
            new Book(
                9785389106826,
                "Повести покойного Ивана Петровича Белкина",
                "Проза, реализм",
                1831,
                128,
                2,
                "Сей почтенный муж почти до конца жизни своей находился в том же чине..."
            ),
            new Book(
                9785171061738,
                "Пиковая дама",
                "Повесть, мистика",
                1834,
                64,
                1,
                "В *** году играли в карты у конногвардейца Нарумова."
            )
        ])
    ]
    const library = new Library(authors)
    library.logByName()
    library.logByPopularity()
    library.sortByYear()
    library.logReleaseYear()
}