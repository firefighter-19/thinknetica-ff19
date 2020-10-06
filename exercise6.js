//Реализовать if для проверки доступа (через тернарный оператор)

let accessAllowed2 = ((this.age >= 18 && this.age <= 35) && (this.paid === true && this.blocked === false && this.badUsername === false || this.isAdmin === true)) ? console.log('Access allowed') : console.log('Access denied');