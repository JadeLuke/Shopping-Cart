// let firstMark;
// let secondMark;
// let thirdMark; 
// let avg = firstMark*secondMark;

// document.getElementById("calcAvg").onclick = 
    function avgFn(){
        markGeo = Number(document.getElementById("geoMark").value);
        markEng = Number(document.getElementById("engMark").value);
        markAfr = Number(document.getElementById("afrMark").value);
        markBusiness = Number(document.getElementById("businessMark").value);
        markIt = Number(document.getElementById("itMark").value);
        markScience = Number(document.getElementById("scienceMark").value);
        let avg = (markMath + markGeo + markEng + markAfr + markBusiness + markIt + markScience)/7; 
        markMath = Number(document.getElementById("mathMark").value);


    let results = document.getElementById("displayy");
   
    if ( avg > 5)
    {
        results.innerHTML = "Pass " + (avg).toFixed(1)


    }
    else {
        results.innerHTML = "fail"
    }


    // alert('Average is ' + (avg).toFixed(1));
    
}
