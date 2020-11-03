//Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам

const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function() {return 'eat'},
    sleep: function() {return 'sleep'},
    callFriend: function() {return 'call'},
    writeReport: function() {return 'report'},
    organizeMeeting: function () {return 'meeting'},
    retire: function () {return 'retire'},
    startVacation: function () {return 'vac'}
};

function Human (person) {
    this.personInfo = function () {
        let personInfo = {
            name: person.name,
            lastName: person.lastName,
            location: person.location,
            phoneNumber: person.phoneNumber
        }
        return personInfo
    },
    this.eat = function() {
        return person.eat();
    },
    this.sleep = function() {
        return person.sleep();
    },
    this.callFriend = function() {
        return person.callFriend();
    }
}
function Employee (person) {
    this.employeeInfo = function () {
        let employeeInfo = {
            position: "Senior engineer",
            startDate: "10.10.1990",
            endDate: "10.10.2000",
            baseSalary: "10000",
            salaryCurrency: "$",
            location: "Russia",
            department: "IT",
            phoneNumber: "+1234567890",
        }
        return employeeInfo
    }
}

function StartedToWork(person) {
    this.fromDate = function() {
        let fromDate = {
            startDate: "10.10.1990",
        }
        return fromDate;
    },
    this.writeReport = function() {
        return person.writeReport();
    },
    this.organizeMeeting = function() {
        return person.organizeMeeting();
    }
}

function LeftJob(person) {
    this.tillDate = function() {
        let tillDate = {
            endDate: "10.10.2000",
        }
        return tillDate;
    },
    this.retire = function() {
        console.log (`${person.name} left`);
    },
    this.startVacation = function() {
        console.log (`${person.name} on vacation`);
    }
}

Employee.prototype = new Human(john);
StartedToWork.prototype = new Employee(john);
LeftJob.prototype = new Employee(john);

let employee = new StartedToWork(john);
let employeeLeft = new LeftJob(john);

console.log(employeeLeft.retire())