let drivers = ['Amari','Mo','Sam'];

const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = [];
    for (let index = 0; index < 2; index++) {
        newDrivers.push(drivers[index]);
    }
    return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(y) {return x*y};

}

let fareDoubler = createFareMultiplier(2);


let fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,referenceFunc) {
    return referenceFunc(drivers);
}

selectDifferentDrivers(drivers,returnLastTwoDrivers);

selectDifferentDrivers(drivers,returnFirstTwoDrivers);

