function calculateAge (birthYear, currentYear) {

    console.log('You are either ' + (currentYear-birthYear) + ' or ' + ((currentYear - birthYear)+1))
}

function ageResults () {
    calculateAge("2000", "2024");
    calculateAge("1989", "2024");
    calculateAge("1994", "2024");

}