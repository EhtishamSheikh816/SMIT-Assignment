// for (let i = 0; i < 5; i++) {
//     document.write("Hello World <br>")
// }



// for (let i = 0; i <= 10; i++) {
//     document.write(i + "<br>")
// }

// let num = +prompt("Enter the number of  items")
// let limit = +prompt("Enter the number of  items")

// for (let i = 0; i <= limit; i++) {
//     document.write(`${num} X ${i} = ${i * num}<br>`)
// }

// let myArr  = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'] 


// for (let i = 0; i < myArr.length; i++) {
//     document.write(`${myArr[i]} <br>`);
    
// }


// let myArr = ['apple', 'banana', 'mango', 'orange', 'strawberry'] 

// for (let i = 0; i < myArr.length; i++) {
//     document.write(`${myArr[i]} <br>`);
    
// }


// for (let i = 0; i < myArr.length; i++) {
//     document.write(`Element at ${i} is ${myArr[i]} <br>`);
    
// }
// let limit = +prompt("Enter the number of  items")
    
// let myArr = []
    
// for (let i = 0; i < limit; i++) {
//     myArr.push(prompt(`Enter product at index ${i}`))
//     document.write(`${myArr[i]}<br>`)
        
// }

// document.write(`<h1> Counting: </h1>`);
// for (let i = 1; i <= 15; i++) {
//     document.write(`${i},`);
    
// }
// document.write(`<h1>Reverse counting: </h1>`);
// for (let i = 10; i >= 1; i--) {
//     document.write(`${i},`);
    
// }
// document.write(`<h1>Even:  </h1>`);
// for (let i = 2; i <= 20; i+= 2) {
//     document.write(`${i},`);
    
// }
// document.write(`<h1>Odd:  </h1>`);
// for (let i = 1; i <= 20; i+=2) {
//     document.write(`${i},`);
    
// }
// document.write(`<h1> Series:  </h1>`);
// for (let i = 0; i <= 20; i+=2) {
//     document.write(`${i}k `);
    
// }

// let myArr = ["cake", "apple pie", "cookie", "chips", "patties"]

// let input = prompt("Enter Item name.")

// if (myArr.includes(input)) {
//     document.write(`${input} is available at index of ${myArr.indexOf(input)} in our bakery.`)
// } else {
//     document.write(`we are sorry.${input} is not avaiable in our bakery.`)
// }

// let myarr = [24, 53, 78, 91, 12,22,340,32,45,350]
// let num = 0;
// for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] > myarr[i+1]&& myarr[i] > num ) {
//         num = myarr[i]
//     }
// }
// document.write(`Array items: ${myarr} <br>`)
// document.write(`the largest number is ${num}`)

// let myarr = [24, 53, 78, 91, 12,22,340,32,45,350]

// let num = (myarr.sort())[0]
// document.write(`Array items: ${myarr} <br>`)
// document.write(`the smallest number is ${num}`)

// for (let i = 5; i < 100; i+=5) {
//     document.write(`${i} `)
    
// }

// let  students = ["Ali", "Sami", "Taha", "Inam"];
// let  scores = [58, 73, 89, 90];
// document.write(`
//         <table border="1" >
//         <tr>
//             <th>Student</th>
//             <th>Scores</th>
//         </tr>
//         <tr>
//             <td>${students[0]}</td>
//             <td>${scores[0]}</td>
//         </tr>
//         <tr>
//             <td>${students[1]}</td>
//             <td>${scores[1]}</td>
//         </tr>
//         <tr>
//             <td>${students[2]}</td>
//             <td>${scores[2]}</td>
//         </tr>
//         <tr>
//             <td>${students[3]}</td>
//             <td>${scores[3]}</td>
//         </tr>
//     </table>
//     `)

// let scores = [12, 45, 3, 22, 34, 50];

// let num = +prompt("Enter namber!!")

// for (let i = 0; i < (scores.indexOf(num)) + 1 ; i++) {
//     document.write(`${scores[i]} `)
    
// }
// let myarr = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// for (let i = 0; i < myarr.length; i++) {
//     for (let j = 0; j < myarr[i].length; j++) {
//         document.write(`${myarr[i][j]} <br>`)
//     }
    
// }


// let num = +prompt("Enter any number")

// for (let i = num; i >= 0; i-= 1/2) {
//     document.write( `${i} `)
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i%2 == 0) {
//         document.write(`${i} is even Number.<br>`)
//     } else {
        
//         document.write(`${i} is odd Number.<br>`)
//     }
    
// }

// let num = 1 ;
// for (let i = 1; i <= 7; i+=2) {
//     num *= i
// }
// document.write(`The product of odd number from 1 to 7 is ${num}. `)
// for (let i = 0; i <= 7; i++) {
//     for (let j = 0 ; j < 7 - i ; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for (let i = 1; i <= 4; i++) {
    //     for (let j = 0; j < 5 ; j++) {
        
    //         document.write("*")
    //     }
    //     document.write("<br>")
    // }
    // for (let i = 1; i <= 5; i++) {
        //     for (let j = 0; j <  i; j++) {
            
//         document.write("*")
//     }
//     document.write("<br>")
// }
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0 ; j < 5 - i ; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

