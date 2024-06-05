let firstMark = Number;
let secondMark = Number;
document.getElementById("calcAvg").onclick = function(){
    firstMark = document.getElementById("mathMark").value;
    secondMark = document.getElementById("geoMark").value;

    alert('Average is ' + `${(firstMark*secondMark)/2}`);
}