// console.log("ThinkNext");
// window.alert("Hello Everybody");


// document.write("hello");
// var a = 30;
// var a = 200;
// a = 20000;
// document.write("<br>");
// document.write(a);


// let b = 20;
// //let b= 300; ///sentex error

// b = 300; // assign with same no. but not declare with same number
// document.write("<br>");
// document.write(b);


// const c = 20;
// /// neiter same name declare or assign in const

// document.write("<br>");
// document.write(c);


// let x = 20;
// let y = 40;

// let z = x + y;
// console.log(z);

// let age = 18;
// if (age >= 18 && age <= 28) {
//     console.log("yes you are eligible ");
// } else {
//     consolelog(" you are not eligible");
// }

// let v = 200;
// let n = 100;

// console.log(v >= 10);


// console.log("ThinkNext");


// // window.alert("Hello Everybody");



// document.write("Hello");



// var a = 20;
// var a = 200;
// a = 2000;
// document.write("<br>");
// document.write(a);



// let b = 30;

// // let b = 300;
// b = 300;
// document.write("<br>");
// document.write(b);



// const c = 40;

// // const c = 400;
// document.write("<br>");
// document.write(c);


// let x = 20;
// let y = 30;

// let z = x + y;

// console.log(z);




// let age = 11;

// if (age >= 18 || age <= 21) {
//     console.log("yes you are  eligible");
// } else {
//     console.log("you are not eligible");
// }


// let v = 200;
// let n = 100;

// console.log(!v <= 100);




// let m = undefined;

// console.log(m);
// console.log(typeof m);




// let per = 93;

// if (per >= 80 && per <= 100) {
//     console.log("you are in merit");
// } else if (per >= 70 && per <= 80) {
//     console.log("you are in 1st division");
// } else if (per >= 60 && per <= 70) {
//     console.log("you are in 2nd  division");
// } else if (per >= 45 && per <= 60) {
//     console.log("you are in 3rd division");
// } else if (per >= 33 && per <= 45) {
//     console.log("you are pass");
// } else if (per < 33) {
//     console.log("you are fail");
// }


// // let score = prompt("enter your score(0-100)");





document.write("<br>");

let day = 6;

switch (day) {
    case 1:
        document.write("monday");

        break;

    case 2:
        document.write("tuesday");

        break;


    case 3:

        document.write("wednesday");

        break;


    case 4:
        document.write("thursday");

        break;

    case 5:
        document.write("friday");
        break;

    case 6:
        document.write("saturday");

        break;

    case 7:
        document.write("sunday");

    default:
        document.write("please enter your valid day");
}


document.write("<br>");

let month = 10;

switch (month) {
    case 1:
        document.write("January");

        break;

    case 2:
        document.write("February");

        break;


    case 3:

        document.write("March");

        break;


    case 4:
        document.write("April");

        break;

    case 5:
        document.write("May");
        break;

    case 6:
        document.write("June");

        break;

    case 7:
        document.write("July");
        break;

    case 8:
        document.write("August");
        break;

    case 8:
        document.write("September");

        break;
    case 9:
        document.write("October");

        break;
    case 10:
        document.write("November");

        break;
    case 6:
        document.write("December");

    default:
        document.write("please enter your valid Month");
}


document.write("<br>");


let ary = [10, 20, 30, 40, 50];
let sum = 0;
for (let key = 0; key <= 4; key++) {
    document.write(ary[key] + "<br>");
    sum = sum + ary[key];
}
document.write("Total sum is:", sum);



document.write("<br>");
for (let index = 1; index <= 20; index++) {
    document.write(index + " ");
}



// for-of loop

let str = "javascript";
let size = 0;
for (let i of str) {
    console.log("i", i);
    size++;
}

console.log("string size: ", size); //10


document.write("<br>");
let n = 6;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    str += '\n';
}
console.log(str);


// document.write("<br>");
// let n = 6;
// for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }
//     str += '\n';
// }
// console.log(str);


// document.write("<br>");
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i] + " ");
//     }
// }



for (let num = 0; num <= 100; num++)
    if (num % 2 == 0) {
        console.log("Even", num);
    } else {
        console.log("Odd", num)
    }



    <
    !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Document < /title> <
    script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" > < /script> <
    script >
    $(document).ready(function() {
        $("#hide").click(function() {
            $("#text").hide();
        });
        $("#show").click(function() {
            $("#text").slideDown();
        });
    }); <
/script>


<
script >
    $(document).ready(function() {
        $("#fadIn").click(function() {
            $("#div1").fadeIn();
            $("#div2").fadeIn("slow");
            $("#div3").fadeIn(3000);
        });
    });
$(document).ready(function() {
    $("#fadout").click(function() {
        $("#div1").fadeOut(3000);
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(1000);
    });
}); <
/script>