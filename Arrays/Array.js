// let marks = [58, 77, 89, 52];
// for(let i = 0; i < marks.length; i++){
//   console.log(marks[i]);
// }
// console.log('\n');
// //for of loop
// for(let i of marks){
//   console.log(i);
// }



// //practice Q1 average of marks
// let marks = [89, 88, 94, 79, 85, 93];
// let sum = 0;
// let avg;
// for(let i = 0; i < marks.length; i++){
//   sum += marks[i];
// }
// avg = sum / marks.length;
// console.log(avg);

// //Q2 discount price with 10% discount
// let item = [250, 645, 300, 900, 50];
// let totalPrince = 0;
// for(let i = 0; i < item.length; i++){
//   let offer = item[i] / 10;
//   item[i] -= offer;
// }
// console.log(item);




// let fooditems = ["apple", "litchi", "chips", "coffee"];
// fooditems.push("fried chicken", "coca cola", "burger");
// console.log(fooditems);
// let deletedItem = fooditems.pop();
// console.log(fooditems);
// console.log("deleted",deletedItem);
// console.log(fooditems.toString());



// //concat
// let marvelHeroes = ["thor", "ironman", "spiderman", "antman"];
// let dcHeroes = ["superman", "batman", "flash"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);
// console.log(heroes.toString());



// // slice and splice
// let arr = [1,2,3,4,5,7,8,9];
// // arr = arr.slice(1,4);
// arr.splice(2,3,88,99,77);   //replace
// // arr.splice(2,1);         //delate
// console.log(arr);



// //practice Q1 creat array of companies and remove 1st , remove and replace and add
// let companies = ["Bloomberg", "Microsoft", "Uber", "Goggle", "IBM", "Nrtflix"];
// console.log(companies);
// console.log(companies.toString());
// companies.shift();
// console.log("After deleting first companie",companies);
// console.log(companies.toString());
// companies.splice(1,1,"Ola");
// console.log("Rmoving Uber and adding ola in it's place",companies);
// console.log(companies.toString());
// companies.push("Amazon");
// console.log("Adding Amazon at the end",companies);
// console.log(companies.toString());
