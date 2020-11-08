function Ships() {
	this.shipsCharacterictics = Object.create({}, {
		ships: {
			get() {
				if (this.characteristics === this.engined) {
					return `This ship is engined and it's power is ${this.horsepower} made from ${this.material}`
				}
				return `${this.mastquantity}${this.sailingarea}`
			}
		}
	})
}

function Shipyard() {
	this.buildShip = function () {
		engined: {
			set: function(enginedShip) {
				[this.horsepower, this.material] = enginedShip;
			}
		}
	}
}