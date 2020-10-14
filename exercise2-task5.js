//1. Узнать среднюю зарплату сотрудников
//2. Отсортировать сотрудников по зарплате
//3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет


const employees = [
	{
		firstName: "Alex",
		lastName: "Smith",
		age: 54,
		salary: 10000,
		position: "Architect"
	},
	{
		firstName: "Gustav",
		lastName: "Andersen",
		age: 31,
		salary: 5000,
		position: "Software engineer"
	},
	{
		firstName: "Liz",
		lastName: "Taylor",
		age: 20,
		salary: 7000,
		position: "Manager"
	}
]

//1. Узнать среднюю зарплату сотрудников

let getSalary = (acc, item) => acc + Number(item.salary);

console.log(employees.reduce(getSalary, 0));



//2. Отсортировать сотрудников по зарплате

let sortBySalary = (a, b) => {
	if (a.salary > b.salary) return -1;
	if (a.salary === b.salary) return 0;
	if (a.salary < b.salary) return 1;
}
console.log(employees.sort(sortBySalary));


//3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

console.log(employees.filter(item => item.salary > 4500 && item.age > 25));
