//Q#1
//Declare and initialize an empty multidimensional array.
//let multiArray = [[1,2],[3,4],[5,6]];

///Q#2
// Declare and initialize a multidimensional array
//representing the following matrix:
//let matrix = [ [0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];

// for(let i=0;i<matrix.length; i++){
//     document.write(`${matrix[i]}<br>`);
// }

//Q#3
//Write a program to print numeric counting from 1 to 10.

// let num = 10;
// for (let i=1; i<=num; i++){
//     document.write(`${i} <br>`);
// }



//Q#4Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user.
/*function printTable(){
    let tableNum = document.getElementById('NumToPrint').value;
    let minLenght = document.getElementById('minLenght').value;
    let maxLenght = document.getElementById('maxLenght').value;

    for(let i=minLenght; i<=maxLenght; i++){
        document.getElementById('display-table').innerHTML += `${tableNum}x ${i} = ${ tableNum*i}<br>`
        
    }
    console.log('work');

}
function refresh(){
     document.getElementById('NumToPrint').value="";
     document.getElementById('minLenght').value="";
    document.getElementById('maxLenght').value="";
    document.getElementById('display-table').innerHTML="";


}*/
//Q#5
//Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]
// var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Strawberry']

// for (var i=0; i<fruits.length; i++){
//     document.write(`${fruits[i]} <br><br> `);
// }

// for (var i=0; i<fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br> <br>`);
// }
//Q#6
//Generate the following series in your browser. See
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//(a) Counting
// let num1 = 15;
// document.write(`<h4>Counting:</h4>`);
// for (let i=1; i<=num1; i++){
//     document.write(`${i} , `);
// }

// // Question #06 (b) Reverse Counting
// document.write(`<h4>Reverse Counting:</h4>`);
// for (let i=10; i>0; i--){
//     document.write(`${i} , `);
// }

// // // Question #06 (c) Even Series
// let num2 = 20;
// document.write(`<h4>Even:</h4>`);
//  for (let i=0; i<=num2; i++){
//     if( i % 2 == 0){

//     document.write(`${i}, `);
// }
// }

//  Question #06 (d) Odd Series

// let num3 = 20;
// document.write(`<h4>Odd:</h4>`);
// for (let i=0; i<=num3; i++){
//     if( i % 2 != 0){

//     document.write(`${i}, `);
// }
// }

// // Question #06 (e) Series
//  let num4 = 20;

//  document.write(`<h4>Series:</h4>`);
//  for (let i=1; i<=num4; i++){
//         if( i % 2 == 0){
    
//          document.write(`${i}k, `);
//      }
//      }

//Q#7
//You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array.
//After searching, prompt the user whether the given item is
//found in the list or not. Examp
// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let search = prompt(`Welcome to Yummyy scrummyy. What do you want to order sir/ma'am?`);
// let foundIt = false;


// for(let i=0; i<=items.length; i++){
//   if ( items[i] === search){
//     foundIt = true;
//     A = items.indexOf(`${search}`);

// }
// }
// if(foundIt){
//  document.write(`${search} is available at index ${A}`);
    
// }




// else {
//     document.write(`We are sorry. ${search} is not available in our bakery.`);
   
//    }
//Q#8
//Write a program to identify the largest number in the
//given array.
//A = [24, 53, 78, 91, 12]
//let Numbers = [24, 53, 78, 91, 12];
//let largestNum = Numbers[0];

//for(let i=0; i<Numbers.length; i++){
    //if(Numbers[i] > largestNum){
      //  largestNum = Numbers[i];
    //}
//}
       // document.write(`Largest Number is: ${largestNum}<br>`);
       //Q#9
       //Write a program to identify the smallest number in the
//given array.
//A = [24, 53, 78, 91, 12]
//let Numbers2= [24, 53, 78, 91, 12];
//let smallestNum = Numbers2[0];

//for(let i=Numbers2.length; i>0 ; i--){
    //if(Numbers[i] < smallestNum){
    //    smallestNum = Numbers2[i];
   // }
//}
       // document.write(`Smallest Number is: ${smallestNum}`);
    //Q#10
    //Write a program to print multiples of 5 ranging 1 to
    //100.

    //for (let number = 1; number <= 100; number++) {
    //if (number % 5 === 0) {
       // console.log(number);
    //}
//}