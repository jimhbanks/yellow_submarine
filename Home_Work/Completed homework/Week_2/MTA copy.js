function NLineStops(stationNameArray) {
 this.stationNameArray = stationNameArray;
}

function SixLineStops(stationNameArray) {
 this.stationNameArray = stationNameArray;
}

function LLineStops(stationNameArray) {
 this.stationNameArray = stationNameArray;
}


var NLine = new NLineStops(["Times Square", "34th N", "28th N", "23rd N", "Union Square N", "8th N" ]);
var SixLine = new SixLineStops(["Grand Central", "33rd 6", "28th 6", "23rd 6", "Union Square 6", "Astor Place 6" ]);
var LLine = new LLineStops(["8th L", "6th L", "Union Square L", "3rd L", "1st L" ]);


    var launch = prompt("Which station are you at?");

var launchIndexN = NLine.stationNameArray.indexOf(launch);
// var launchIndexSix = SixLine.stationNameArray.indexOf(launch);
// var launchIndexL = LLine.stationNameArray.indexOf(launch);


    var land = prompt("Which station are you going to?");

var landIndexN = NLine.stationNameArray.indexOf(land);
var landIndexSix = SixLine.stationNameArray.indexOf(land);
var landIndexL = LLine.stationNameArray.indexOf(land);




function calcStopDistance () {
  if (leaveIndex === -1 ) {
    var checkNline = nLine.stationNameArray.indexOf (land);
  } else if (checkNLine === -1)
    var checkSixLine = stationNameArray.indexOf(land);
  }
//   return Math.abs(launchIndexN - landIndex);

//   return checkNline;

console.log(Math.abs(launchIndexN - landIndex));
