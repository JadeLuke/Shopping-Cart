// function tellFortune () {

//     let numChildren = prompt('Enter how many kids you want');
//     let partnerName = prompt('Enter partner name');
//     let location = prompt('Enter where you want to live');
//     let jobTitle = prompt('Enter dream job') 
//     let results = document.getElementById('display')
//     results.innerHTML = 'You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + numChildren + ' kids' 

// }

function renderResults() {
    tellFortune("2", "Sally", "JHB", "Developer");
    tellFortune("3", "Rihanna", "PTA", "Chef");
    tellFortune("1", "Susan", "DBN", "Teacher");
}


function tellFortune( noChildren, partersName, location, jobRole) {
    // let results = document.getElementById('display');
    console.log('You will be a ' + jobRole + ' in ' + location + ', and married to ' + partersName + ' with ' + noChildren + ' kids')
return tellFortune

}
