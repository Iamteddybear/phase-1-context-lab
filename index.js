/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employeePropsAraay) {
    return {
        firstName: employeePropsAraay[0],
        familyName: employeePropsAraay[1],
        title: employeePropsAraay[2],
        payPerHour: employeePropsAraay[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

function createEmployeeRecords(arrayOfEmployeePropsArray) {
    return arrayOfEmployeePropsArray.map(createEmployeeRecord)
};

function createTimeInEvent(date) {
    let timeInEventObj = {
        type: "TimeIn",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1]),
    };

    this.timeInEvents.push(timeInEventObj);
    return this;
}


function createTimeOutEvent(date) {
    let timeOutEventObj = {
        type: "TimeOut",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1]),
    };

    this.timeOutEvents.push(timeOutEventObj);
    return this;
}

function hoursWorkedOnDate(employeeObj, date) {
    let timeInEventOnDate = employeeObj.timeInEvents.find(
        (timeInEvent) => timeInEvent.date === date
    );

    let timOutEventOnDate = employeeObj.timeOutEvents.find(
        (timeOutEvent) => timeOutEvent.date === date
    );

    return (timOutEventOnDate.hour - timeInEventOnDate.hour) / 100;
}

function wagesEarnedOnDate(employeeObj, date) {
    return hoursWorkedOnDate(employeeObj, date) * employeeObj.payPerHour;
}

function calculatePayroll(employeeRecords) {
    return employeeRecords
        .map(allWagesFor)
        .reduce(
            (partialSumOfAllWages, currentEmployeeWage) =>
                partialSumOfAllWages + currentEmployeeWage
        );
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

