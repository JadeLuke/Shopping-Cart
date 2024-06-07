     function avgFn(){
       let markMath = Number(document.getElementById("mathMark").value);
       let  markGeo = Number(document.getElementById("geoMark").value);
       let markEng = Number(document.getElementById("engMark").value);
       let   markAfr = Number(document.getElementById("afrMark").value);
       let  markBusiness = Number(document.getElementById("businessMark").value);
       let  markIt = Number(document.getElementById("itMark").value);
       let markScience = Number(document.getElementById("scienceMark").value);
       let avg = (markMath + markGeo + markEng + markAfr + markBusiness + markIt + markScience)/7; 


        let results = document.getElementById("displayy");
   
    if ( avg >= 50)
    {
        document.getElementById("displayy").style.color = "green";
        results.innerHTML = "You have passed with an Average of " + (avg).toFixed(1) + '%'
    }
    else {
        document.getElementById("displayy").style.color = "red";
        results.innerHTML = "You did not pass, your Average is " + (avg).toFixed(1) + '%'
    }
    
}
