// let firstName = prompt("Enter your first name.")
// let lastName = prompt("Enter your last name.")

// document.write(`Hello, ${firstName} ${lastName}`)

// let mobile = prompt("Enter your favorite mobile name")
// document.write(`Your favorite mobile is${mobile}<br>Length: ${mobile.length}`)


// let word = "pakistani"
// document.write(`Index of n is: ${word.indexOf("n")}`)

// let word = "Hello world"
// document.write(`String: ${word}<br>Last index of "l": ${word.lastIndexOf("l")}`)

// let word = "pakistani"
// document.write(`String: ${word}<br>character at 3 is: ${word[3]}`)

// let firstName = prompt("Enter your first name.")
// let lastName = prompt("Enter your last name.")
// document.write(`Hello, ${firstName.concat(" ",lastName)}`)


// let word = "Hyderabad"
// document.write(`${word.replace("Hyder","Islam")}`)

// let word = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(`${word.replaceAll("and","&")}`)

// let word = "420"
// let num = Number(word)
// document.write(`value:${word}<br>type:${typeof(word)}<br>value:${num}<br>value:${typeof(num)}`)

// let link = "www.facebook.com"
// document.write(`URL: ${link}<br>Domain: ${link.replace("www.","")}`)

// let input = prompt("Enter any word.")
// document.write(`User Input: ${input}<br>Uppercase: ${input.toUpperCase()}`)

// let input = prompt("Enter any word.")
// document.write(`User Input: ${input}<br>Uppercase: ${input.toLowerCase()}`)

// let num = 35.36
// let str = String(num)
// document.write(`Number: ${num}<br> Result: ${str.replace(".",'')}`)

// let a = "3";
// let b = "3";
// let x = a + b;
// document.write(`a is 3<br>b is 3<br>a + b is ${x}`)


// let a = "3";
// let b = "3";
// let x = a - b;
// document.write(`a is 3<br>b is 3<br>a - b is ${x}`)


// let username = prompt("Enter your Username.")

// if (username.includes("!") || username.includes("@") || username.includes(",") || username.includes(".")) {
//     document.write("Enter a valid user name")
// }

// let bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// let input = prompt("Enter Any item.").toLowerCase()

// if (bakery.includes(input)) {
//     document.write(`${input} is available at index ${bakery.indexOf(input)} in our Bakery.`)
// } else {
//     document.write(`We are Sorry.${input} is not available in our Bakery.`)
// }

// let password = prompt("Enter your PAssword.")
// if (password.length > 6) {
    
//     for (let i = 0; i < password.length; i++) {
//         if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
//             document.write("you r good")
//         }
// }
    
// }else{
//     document.write("enter a valid password.")
// }
// let password = prompt("Enter your password:");

// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } else {
//     // Check if starts with a number (ASCII for '0' is 48 and '9' is 57)
//     let firstChar = password.charCodeAt(0);

//     if (firstChar >= 48 && firstChar <= 57) {
//         alert("Password should not start with a number.");
//     } else {
//         // Check for alphabets and numbers using ASCII codes
//         let hasAlphabet = false;
//         let hasNumber = false;

//         for (let i = 0; i < password.length; i++) {
//             let code = password.charCodeAt(i);

//             // Check for alphabets (A-Z: 65-90, a-z: 97-122)
//             if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//                 hasAlphabet = true;
//             }

//             // Check for numbers (0-9: 48-57)
//             if (code >= 48 && code <= 57) {
//                 hasNumber = true;
//             }
//         }

//         if (!hasAlphabet || !hasNumber) {
//             alert("Password must contain both alphabets and numbers.");
//         } else {
//             // If all conditions are met
//             alert("Password is valid!");
//         }
//     }
// }



// let word = "University of Karachi"
// let myarr = word.split("")

// for (let i = 0; i < myarr.length; i++) {
//     document.write(`${myarr[i]}<br>`)
// }

// let word = prompt("Enter any word")
// document.write(`User input:${word}<br>Last Character of input: ${word.charAt(word.length - 1)}`)


// let word = "The quick brown fox jumps over the lazydog."
// let words = word.toLowerCase().split(" ")
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i] == "the") {
//         count++;
//     }
    
// }
// document.write(`text: ${word}<br>There are ${count} occurrences of the word "the"`)

// let word = "pakistani"
// let vowel = 0
// let consonent = 0
// for (let i = 0; i < word.length; i++) {
//     if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" ||){
//         vowel++
//     }else{
//         consonent++
//     }
    
// }
