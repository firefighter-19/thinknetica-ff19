function getRandomID(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // if (ships[number] === result) {
    //     return `This number is already used`
    // }
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result.toString()
};

function EnginedShip(hp, body) {
    this.hp = hp;
    this.body = body;
    this.type = 'engined'
    this.color = 'black'
    this.lastRepair = null
}

function SailingShip(mastNum, mastArea) {
    this.mastNum = mastNum;
    this.mastArea = mastArea;
    this.type = 'sail';
    this.color = 'yellow';
    this.lastRepair = null;
}

function EnginedShipyard() {
    this.type = 'engined';
    this.buildEngineShip = function(hp, body) {
        let number = getRandomID();
        this.ships[number] = new EnginedShip(hp, body);
        return `You've succefully built engined ship number ${number}`
    }
}

function SailingShipyard() {
    this.type = 'sail';
    this.buildSailShip = function(mastNum, mastArea) {
        let number = getRandomID();
        this.ships[number] = new SailingShip(mastNum, mastArea);
        return `You've succefully built sail ship number ${number}`
    }
}

function Shipyard() {
    let ships = {
        '23': new EnginedShip(50, 'wooden'),
        '17': new SailingShip(2, 100)
    }
    
    this.ships = ships;

    this.getInfo = function() {
        return ships
    },
    this.changeColor = function(number, color) {
        if (ships[number] !== undefined) {
            this.ships[number]['color'] = color
            return `You've succefully painted number ${number} ship`
        }
    },
    this.repair = function(number) {
        if (this.ships[number]['type'] === this.type && this.ships[number] != undefined) {
            this.ships[number]['lastRepair'] = new Date().toLocaleDateString();
            return `You've succefully repaired ${this.ships[number].type} ship number ${number}`
        }
    },
    this.replace = function(number) {
        if (this.ships[number]['type'] === this.type && this.ships[number] != undefined) {
            let newNumber = getRandomID();
            this.ships[newNumber] = ships[number];
            this.ships[newNumber]['lastRepair'] = null;
            delete ships[number]
            return `You've succefully replaced ${this.ships[newNumber].type} ship number ${number}`
        }
    }

}

EnginedShipyard.prototype = new Shipyard();
SailingShipyard.prototype = new Shipyard();
EnginedShip.prototype = new EnginedShipyard();
SailingShip.prototype = new SailingShipyard();

let engineShipyard = new EnginedShip();
let sailingShipyard = new SailingShip();


console.log(engineShipyard.buildEngineShip(10, 'steel armored'));
console.log(sailingShipyard.buildSailShip(20, 100));
console.log(engineShipyard.changeColor('23', 'ashen'));
console.log(sailingShipyard.changeColor('17', 'dark'));
console.log(engineShipyard.repair('23'));
console.log(sailingShipyard.repair('17'));
console.log(sailingShipyard.replace('17'));
console.log(engineShipyard.getInfo());

