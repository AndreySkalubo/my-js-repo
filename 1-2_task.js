const max = 25
const username1 = "Alice"
const userPoints1 = 17
const username2 = "Karl"
const userPoints2 = 22

console.log(`Hello, class! Here is the table with test results:
**** Name - points - has passed? ****
     ${username1} - ${userPoints1 / max * 100}% - ${userPoints1 > 20}
     ${username2} - ${userPoints2 / max * 100}% - ${userPoints2 > 20}
    `)