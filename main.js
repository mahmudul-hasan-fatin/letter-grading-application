let input =parseFloat(prompt('Enter your number :'));
console.log(input);
if (input < 0 || input > 100){
    console.log(`Result : you have entered invalid number`)
}
else if (input >= 80 && input <=100 ){
    console.log(`Result : You have got A+`);
}
else if (input >=70 && input <=79){
    console.log(`Result : You Have got A`);
}
else if (input >=60 && input <=69){
    console.log(`Results : You have got A-`);
}
else if (input >=50 && input <=59){
    console.log(`Results : You Have got B `);
}
else if (input >=40 && input <=49){
    console.log(`Results : you have got C`);
}
else if (input >=33 && input <=39){
    console.log(`Results : Youn have got : D`);
}
else{
    console.log(`Results : You have failed`);
}
