// let firstMark;
// let secondMark;
// let thirdMark; 
// let avg = firstMark*secondMark;
document.getElementById("calcAvg").onclick = function avgFn(){
    markMath = Number(document.getElementById("mathMark").value);
    markGeo = Number(document.getElementById("geoMark").value);
    markEng = Number(document.getElementById("engMark").value);
    markAfr = Number(document.getElementById("afrMark").value);
    markBusiness = Number(document.getElementById("businessMark").value);
    markIt = Number(document.getElementById("itMark").value);
    markScience = Number(document.getElementById("scienceMark").value);
    let avg = (markMath + markGeo + markEng + markAfr + markBusiness + markIt + markScience)/7 ; 


    alert('Average is ' + (avg).toFixed(1) );
}
