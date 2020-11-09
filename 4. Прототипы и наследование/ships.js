function getRandomID(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = '';
    // if (ships[number] === result) {
    //     return `This number is already used`
    // }
    result = Math.floor(Math.random() * (max - min)) + min;
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
        ships[number] = new EnginedShip(hp, body);
        return `You've succefully built engined ship number ${number}`
    }
}

function SailingShipyard() {
    this.type = 'sail';
    this.buildSailShip = function(mastNum, mastArea) {
        let number = getRandomID();
        ships[number] = new SailingShip(mastNum, mastArea);
        return `You've succefully built sail ship number ${number}`
    }
}

function Shipyard() {
    this.getInfo = function() {
        return ships
    },
    this.changeColor = function(number, color) {
        if (ships[number] !== undefined) {
            ships[number]['color'] = color
            return `You've succefully painted number ${number} ship`
        }
    },
    this.repair = function(number) {
        if (ships[number]['type'] === this.type && ships[number] != undefined) {
            ships[number]['lastRepair'] = new Date().toLocaleDateString();
            return `You've succefully repaired ${ships[number].type} ship number ${number}`
        }
    },
    this.replace = function(number) {
        if (ships[number]['type'] === this.type && ships[number] != undefined) {
            let newNumber = getRandomID();
            ships[newNumber] = ships[number];
            ships[newNumber]['lastRepair'] = null;
            delete ships[number]
            return `You've succefully replaced ${ships[newNumber].type} ship number ${number}`
        }
    }

}

let ships = {
    '23': new EnginedShip(50, 'wooden'),
    '17': new SailingShip(2, 100)
};


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

