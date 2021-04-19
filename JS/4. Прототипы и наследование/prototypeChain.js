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

function Human () {
    this.name = 'John';
    this.lastName = 'Smith';
    this.phoneNumber = '+1234567890';
    this.eat = function() {
        return `${this.name} eats`;
    },
    this.sleep = function() {
        return `${this.name} sleeps`;
    },
    this.callFriend = function() {
        return `${this.name} calls friend`;
    }
}
function Employee () {
   this.position = "Senior engineer";
   this.baseSalary = "10000";
   this.salaryCurrency = "$";
   this.location = "Russia";
   this.department = "IT";
}

function StartedToWork() {
    this.startDate = "10.10.1990";
    this.organizeMeeting = function() {
        return `${this.name} organized the meeting`;
    },
    this.writeReport = function() {
        return `${this.name} writes the report`;
    }
}

function LeftJob() {
    this.endDate = "10.10.2000",
    this.retire = function() {
        console.log (`${this.name} left job at ${this.endDate}`);
    },
    this.startVacation = function() {
        console.log (`${this.name} on vacation`);
    }
}

Employee.prototype = new Human();
StartedToWork.prototype = new Employee();
LeftJob.prototype = new Employee();

let employee = new StartedToWork();
let employeeLeft = new LeftJob();
