//1
{
    let height = 10
    let i = 1

    while (i <= height) {
        let line = ""
        let j = - (height - i)
        let k = 2
        while (k <= i) {
            line += ("  ")
            k++
        }
        while (j < height - i + 1) {
            line += Math.abs(j) + " "
            j++
        }
        console.log(line)
        i++
    }
}
//2
{
    let size = 10
    let i = 1

    while (i <= size) {
        let line = ' '.repeat(size - i)
        let j = 1

        while (j <= i) {
            line += j % 10
            j++
        }

        j = i - 1
        while (j >= 1) {
            line += j % 10
            j--
        }

        console.log(line)
        i++
    }

    i = size - 1
    while (i >= 1) {
        let line = ' '.repeat(size - i)
        let j = 1

        while (j <= i) {
            line += j % 10
            j++
        }

        j = i - 1
        while (j >= 1) {
            line += j % 10
            j--
        }

        console.log(line)
        i--
    }

}
//3
{
    {
        let height = 6
        let num = 1
        let i = 0
        while (i < height) {
            let line = ""
            let j = 0
            while (j < i) {
                line += num++ + " "
                j++
            }
            console.log(line)
            i++
        }

    }
}
//4
{
    {
        let height = 5
        let num = 1
        let i = 1
        while (i <= height) {
            let line = ""
            let j = 0
            while (j < i) {
                let currentNum = num + (j * height) - (j * (j - 1)) / 2 + (i - 1 - j)
                line += currentNum + " "
                j++
            }
            console.log(line)
            i++
        }
    }
}
//5
{
    let msg = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
    console.log(msg.replaceAll("br", ""))
}
//6
{
    let msg = "Lorem ipsum dolor sit amet"
    let arr = msg.split("")
    let cypher = []
    console.log(arr)

    let i = 0
    while (i < arr.length) {
        if (i % 2 === 0) {
            cypher.unshift(arr[i])
        } else {
            cypher.push(arr[i])
        }
        i++
    }

    let mid = Math.ceil(cypher.length / 2) - 1
    let desypher = []
    let j = mid + 1

    i = mid
    while (i >= 0) {
        desypher.push(cypher[i])
        if (j < cypher.length) {
            desypher.push(cypher[j])
        }
        j++
        i--
    }
    desypher = desypher.join("")
    console.log(desypher)
}
