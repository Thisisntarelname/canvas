var destination = 206
var from = 232
//Try going from 232 to 206
//Group C to F
//Add a "you are here" text to From on canvas

let data = `[
  {
    "number": 206,
    "xcordinate": "480",
    "ycordinate": "460",
    "group": "F"
  },
  {
    "number": 232,
    "xcordinate": "275",
    "ycordinate": "640",
    "group": "C"
  },
    {
    "number": 251,
    "xcordinate": "230",
    "ycordinate": "800",
    "group": "A"

  },
    {
    "number": 244,
    "xcordinate": "560",
    "ycordinate": "700",
    "group": "B"

  },
    {
    "number": 317,
    "xcordinate": "760",
    "ycordinate": "600",
    "group": "G1"

  },
    {
    "number": 306,
    "xcordinate": "980",
    "ycordinate": "540",
    "group": "G3"

  },
  {
    "number": 343,
    "xcordinate": "540",
    "ycordinate": "320",
    "group": "H2"

  }]`;

let paths = `
{
  "A": {
    "B": [
      200,
      300,
      682,
      917
    ],
    "C": [
      122,
      242,
      976,
      564
    ],
    "D": [
      834,
      534
    ]
  },
  "B": {
    "A": [
      200,
      300,
      682,
      917
    ],
    "C": [
      122,
      242,
      976,
      564
    ],
    "D": [
      834,
      534
    ]
  },
  "C": {
    "B": [
      200,
      300,
      682,
      917
    ],
    "A": [
      122,
      242,
      976,
      564
    ],
    "F": [
      435,
      500,
      455,
      655,
      340,
      660,
      270,
      625
    ]
  },
  "D": {
    "B": [
      200,
      300,
      682,
      917
    ],
    "C": [
      122,
      242,
      976,
      564
    ],
    "A": [
      834,
      534
    ]
  },
  "E": {
    "B": [
      200,
      300,
      682,
      917
    ],
    "C": [
      122,
      242,
      976,
      564
    ],
    "D": [
      834,
      534
    ]
  },
  "F": {
    "B": [
      200,
      300,
      682,
      917
    ],
    "C": [
      122,
      242,
      976,
      564
    ],
    "D": [
      834,
      534
    ]
  }
}`


let rooms = JSON.parse(data);
var length = (Object.keys(rooms).length);

let path = JSON.parse(paths);
var pathlength = (Object.keys(paths).length);
console.log(pathlength)
console.log(length)

for (let i = 0; i < length; i++) {

  if ((rooms[i].number)  == destination){
    destinationCordinatesX = (rooms[i].xcordinate)
    destinationCordinatesY = (rooms[i].ycordinate)
    destinationGroup = (rooms[i].group)

    console.log("Go to", destinationCordinatesX, destinationCordinatesY)

  }
  if ((rooms[i].number)  == from){
    fromCordinatesX = (rooms[i].xcordinate)
    fromCordinatesY = (rooms[i].ycordinate)
    fromGroup = (rooms[i].group)
    console.log("Go to", fromCordinatesX, fromCordinatesY)


  }
}

console.log(fromCordinatesX, fromCordinatesY, destinationCordinatesX, destinationCordinatesY)
fromCordinatesX = Number(fromCordinatesX)
fromCordinatesY = Number(fromCordinatesY)
destinationCordinatesX = Number(destinationCordinatesX)
destinationCordinatesY = Number(destinationCordinatesY)

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = 'blue';

console.log("fromGroup:", fromGroup)
console.log("destinationGroup:", destinationGroup)
fromGroup = String(fromGroup)
console.log(paths[fromGroup])
//Horizontal
/***
//Grid pattern
ctx.moveTo(0, 100);
ctx.lineTo(1000, 100);
ctx.moveTo(0, 200);
ctx.lineTo(1000, 200);
ctx.moveTo(0, 300);
ctx.lineTo(1000, 300);
ctx.moveTo(0, 400);
ctx.lineTo(1000, 400);
ctx.moveTo(0, 500);
ctx.lineTo(1000, 500);
ctx.moveTo(0, 600);
ctx.lineTo(1000, 600);
ctx.moveTo(0, 700);
ctx.lineTo(1000, 700);
ctx.moveTo(0, 800);
ctx.lineTo(1000, 800);
ctx.moveTo(0, 900);
ctx.lineTo(1000, 900);
ctx.moveTo(0, 1000);
ctx.lineTo(1000, 1000);
ctx.moveTo(0, 50);
ctx.lineTo(1000, 50);
ctx.moveTo(0, 150);
ctx.lineTo(1000, 150);
ctx.moveTo(0, 250);
ctx.lineTo(1000, 250);
ctx.moveTo(0, 350);
ctx.lineTo(1000, 350);
ctx.moveTo(0, 450);
ctx.lineTo(1000, 450);
ctx.moveTo(0, 550);
ctx.lineTo(1000, 550);
ctx.moveTo(0, 650);
ctx.lineTo(1000, 650);
ctx.moveTo(0, 750);
ctx.lineTo(1000, 750);
ctx.moveTo(0, 850);
ctx.lineTo(1000, 850);
ctx.moveTo(0, 950);
ctx.lineTo(1000, 950);


//Vertical
ctx.moveTo(100, 0);
ctx.lineTo(100, 1000);
ctx.moveTo(200, 0);
ctx.lineTo(200, 1000);
ctx.moveTo(300, 0);
ctx.lineTo(300, 1000);
ctx.moveTo(400, 0);
ctx.lineTo(400, 1000);
ctx.moveTo(500, 0);
ctx.lineTo(500, 1000);
ctx.moveTo(600, 0);
ctx.lineTo(600, 1000);
ctx.moveTo(700, 0);
ctx.lineTo(700, 1000);
ctx.moveTo(800, 0);
ctx.lineTo(800, 1000);
ctx.moveTo(900, 0);
ctx.lineTo(900, 1000);
ctx.moveTo(1000, 0);
ctx.lineTo(1000, 1000);
ctx.moveTo(50, 0);
ctx.lineTo(50, 1000);
ctx.moveTo(150, 0);
ctx.lineTo(150, 1000);
ctx.moveTo(250, 0);
ctx.lineTo(250, 1000);
ctx.moveTo(350, 0);
ctx.lineTo(350, 1000);
ctx.moveTo(450, 0);
ctx.lineTo(450, 1000);
ctx.moveTo(550, 0);
ctx.lineTo(550, 1000);
ctx.moveTo(650, 0);
ctx.lineTo(650, 1000);
ctx.moveTo(750, 0);
ctx.lineTo(750, 1000);
ctx.moveTo(850, 0);
ctx.lineTo(850, 1000);
ctx.moveTo(950, 0);
ctx.lineTo(950, 1000);
ctx.stroke();
***/
//ctx.moveTo(275, 640);
//ctx.lineTo(290, 630);
ctx.strokeStyle = 'red';
ctx.moveTo(fromCordinatesX, fromCordinatesY);
ctx.lineTo(destinationCordinatesX, destinationCordinatesY);
ctx.stroke();


//window.alert(x);
