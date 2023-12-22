////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:
// console.log(12 * 8);

// 2.Divide 10 by 2 add result to variables x, and console x:
// let x = 10 / 2;
// console.log(x);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
// let num1 = 20, num2 = 17;
// console.log(num1 + num2);

// 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
//   then add them to varibale name (info) and console info.
// let name = "Yusif";
// let surname = "Shafiyev";
// let year = "1995";
// let info = name + " " + surname + " " + year;
// console.log(info);

// 5.Console the remainder(%) when 17 is divided by 12.
// let y = 17 % 12;
// console.log(y);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.
// let cityName='Baku'
// cityName='Gence'
// console.log(cityName);

////// TASK 2 //////////////

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(d); // 1
// console.log(c); // 2
// console.log(b); // 2

////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // 5

////////////// TASK 4 //////////////

// console.log('test1', test); // test1 undefined
// {
//     let test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test);  // test3 undefined

// console.log('test1', test);  // test1 undefined
// {
//     var test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test); // test3 something

////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat";
// let surname = Zakirli;
// let year = 2000;
// year = "2000";
// let city;
// let qualification = null;
// let obj = { name: "ulfat" };
// let arr = ["a", "b", "c"];
// console.log(typeof(name)); //string
// console.log(typeof(surname)); //error
// console.log(typeof(year)); //string
// console.log(typeof(city)); //undefined
// console.log(typeof(qualification)); //object
// console.log(typeof(obj)); //object
// console.log(typeof(arr)); //object


////////////// TASK 6 //////////////
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// let a = 0;
// for (let i=0; i < arr1.length; i++) { 
// a +=arr1[i];
// }
// console.log(a);
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// arr1.push(10,88);
// console.log(arr1);
// 3.Remove first two numbers from arr1
// arr1.pop()
// arr1.pop()
// console.log(arr1);
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// arr1.unshift(0, 9, 11)
// console.log(arr1);
// 5.Remove four numbers in front of arr1(shift)
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1);

////////////// TASK 7 //////////////
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
// 2.Change Gulshen to Rovshen
// 3.Console each name with map
// arr2.map((item) => console.log(item))
// 4.Console only names which is Anar
// let b = arr2.filter(item => item === 'Anar')
// console.log(b);
// 5.Console all names where name is Anar change it to "Perviz"
// const result = arr2.map(item => (item === "Anar" ? "Perviz" : item));
// console.log(result);
// 6.Console second to last value of arr2
// 7.Console length of arr2
// console.log(arr2.length);

////////////// TASK 8 //////////////
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers
// const result = arr3.filter(item => typeof item === 'number')
// console.log(result);
// 2.Show only true values
// const result = arr3.filter(item => typeof item === 'true')
// console.log(result);
// 3.Show only false values
// const result = arr3.filter(item => item === false)
// console.log(result);
// 4.Show only strings
// const result = arr3.filter(item => typeof item === 'string')
// console.log(result);

////////////// TASK 8 //////////////
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
// const result = numbers.filter(item => item % 2 === 0)
// console.log(result);
// 2.Console (only odd numbers)
// const result = numbers.filter(item => item % 2 === 1)
// console.log(result);

////////////// TASK 9 //////////////
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]
// const result1 = arr4.map(item => (typeof item === 'number' ? item + 10 : item))
// console.log(result1);
// const result2 = result1.map(item => (typeof item === 'string' ? item + ' is string' : item))
// console.log(result2);
// const result3 = result2.map(item => (item === false ? item + ' is falsy value' : item))
// console.log(result3);

// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// const result = arr4.filter(item => item === true)
// console.log(result.length);
// 4.Count only the values that are string
// const result = arr4.filter(item => typeof item === 'string')
// console.log(result.length);
// 5.Count only the values that are false
// const result = arr4.filter(item => item === false)
// console.log(result.length);

////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// const obj = {
//     name : 'Yusif',
//     surname : 'Shafiyev',
//     age : 28,
//     city : 'Sumgait'
// }
// 2.Then change name to "Jhon"
// obj.name = 'John'
// console.log(obj);

// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 uniName: "ADNSU",
//             }
//         }
//     }
// }

// 3.Console gender
// console.log(obj.info.gender);
// 4.Console city
// console.log(obj.info.loc.city);
// 5.Console uni name
// console.log(obj.info.loc.education.uniName);