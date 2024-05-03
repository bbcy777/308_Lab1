// Part 1 -------------------------------------------------------------------------
//Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Are numbers divisible by 5? True or False
const isDivBy5 = (num1 % 5 == 0) && (num2 % 5 == 0) && (num3 % 5 == 0) && (num4 % 5 == 0);
console.log(`Are all numbers are divisible by 5?`, isDivBy5);

//Is the first number larger than the last? True/False
const isLarger = num1 > num4;
console.log(`Is the first number larger than the last numbers?`, isLarger);

//Arithmetic chain
const math = (num2 - num1) * num3 % num4 
console.log(math)

//No number can be larger than 25
const isOver25 = num1 < 25 && num2 < 25 && num3 < 25 && num2 < 25;
console.log(`Are all numbers less than 25?`, isOver25);

//Did the numbers pass all validation checks?
const isValid = isDivBy5 && isLarger && isOver25 && !math
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`)

// Part 2 -------------------------------------------------------------------------
//Initial fuel efficiency
const totalDistance = 1500;
const speed1 = 55;
const distance1 = 30;
const speed2 = 60;
const distance2 = 28;
const speed3 = 75;
const distance3 = 23;
const budge = 175;
const fuelPerGallon = 3;

//Gallons of fuel needed for the entire trip
const totalFuel1 = totalDistance/distance1
console.log(`At 55 miles per hour, we need ${totalFuel1} gallons of fuel.`);
const totalFuel2 = totalDistance/distance2
console.log(`At 60 miles per hour, we need ${totalFuel2} gallons of fuel.`);
const totalFuel3 = totalDistance/distance3
console.log(`At 75 miles per hour, we need ${totalFuel3} gallons of fuel.`);

//Budget cover the fuel expense? True/False
const cost1 = totalFuel1 * fuelPerGallon;
const isCovered1 = budge > cost1;
console.log(`Will budget be enough to cover the fuel expense if we drive 55 miles per hour?`, isCovered1);
const cost2 = totalFuel2 * fuelPerGallon;
const isCovered2 = budge > cost2;
console.log(`Will budget be enough to cover the fuel expense if we drive 60 miles per hour?`, isCovered2);
const cost3 = totalFuel3 * fuelPerGallon;
const isCovered3 = budge > cost3;
console.log(`Will budget be enough to cover the fuel expense if we drive 75 miles per hour?`, isCovered3);

//How long will the trip take, in hours?
const time1 = totalDistance/speed1;
console.log(`If we drive 55 miles per hour, it will take ${time1} hours for the entire trip.`);
const time2 = totalDistance/speed2;
console.log(`If we drive 60 miles per hour, it will take ${time2} hours for the entire trip.`);
const time3 = totalDistance/speed3;
console.log(`If we drive 75 miles per hour, it will take ${time3} hours for the entire trip.`);

//Which makes the most sense for the trip?
const best1 = isCovered1 && (time1 < time2 || time1 < time3);
console.log(`Does travelling 55 miles per hour make the most sense for the trip?`, best1);
const best2 = isCovered2 && (time2 < time1 || time2 < time3);
console.log(`Does travelling 60 miles per hour make the most sense for the trip?`, best2);
const best3 = isCovered3 && (time3 < time2 || time3 < time1);
console.log(`Does travelling 75 miles per hour make the most sense for the trip?`, best3);

// Part 3 -------------------------------------------------------------------------
//