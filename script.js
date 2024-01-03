//  GUVI Day-7-Task
//  Question 1

//  Get all the countries from Asian contients/ region using filter function...
let request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  let data = request1.response;
  let result = JSON.parse(data);
    
  let resultValue = result.filter((value) => value.region === "Asia");
  let finalResult = resultValue.map((element) => console.log(element.name.common));
    
}

// Question 2:

// Get all the countries with a popultion of less than 2 lakhs using filter function...

let request2 = new XMLHttpRequest();
request2.open("Get", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
    let data1 = request2.response;
    let result1 = JSON.parse(data1);
  let resultValue1 = result1.filter((value1) => value1.population < 200000);
  let finalResult1 = resultValue1.map((element) => console.log(element.name.common))
}


//Question 3:

// Print the following details name, capital, flags using forEach function....

let request3 = new XMLHttpRequest();
request3.open("Get", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  let data2 = request3.response;
  let result2 = JSON.parse(data2);
  let finalValue2 = result2.forEach((element) => console.log(`${element.name.common},${element.capital},${element.flag}`));
  
}

//Question 4:

// Print the total population of countries using reduce function

let request4 = new XMLHttpRequest();
request4.open("Get", "https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function () {
  let data3 = request4.response;
  let result3 = JSON.parse(data3);
  let finalValue3 = result3.reduce((acc, val) => acc + val.population, 0);
  console.log(finalValue3)
}

// Question 5:
 
// Print the countries that uses US dollar as currency....

let request5 = new XMLHttpRequest();
request5.open("Get", "https://restcountries.com/v3.1/all", true);
request5.send();
request5.onload = function () {
  let data4 = request5.response;
  let result4 = JSON.parse(data4);
  let finalResult5 = result4.filter((ele)=> ele.currencies && ele.currencies.USD);
  finalResult5.forEach((ele)=>console.log(ele.name.common));


}