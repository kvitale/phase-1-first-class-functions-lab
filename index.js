const returnFirstTwoDrivers = function(arrayOfDrivers){
    return (arrayOfDrivers.slice(0,2))
}

// console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
   
const returnLastTwoDrivers = function(arrayOfDrivers){
    return (arrayOfDrivers.slice(-2))
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]   


function createFareMultiplier(value){
    return function(multiplyValue){
        return value * multiplyValue
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers)
}
    


    

