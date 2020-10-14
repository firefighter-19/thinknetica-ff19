//Создать объект human со следующими возможностями

const human = Object.create({}, {
	fullName: {
		set: function (value) {
			[this.firstName, this.lastName] = value.split(' ');
		},
		get() {
			return `${this.firstName} ${this.lastName}`;
		}
	},
	dateOfBirth: {
		set: function (value) {
			[this.age] = value;
		}
	}
})



human.fullName = 'Alex Romanov';
human.age = 2020 - 1983;

console.log(human)
console.log(human.fullName)