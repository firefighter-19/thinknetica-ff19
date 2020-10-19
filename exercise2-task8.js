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
			birth = new Date(value);
			today = new Date;
			this.age = today.getFullYear() - birth.getFullYear();
		},
		
	}
})



human.fullName = 'Alex Romanov';
human.dateOfBirth = '07.11.1992';

console.log(human)
console.log(human.fullName)