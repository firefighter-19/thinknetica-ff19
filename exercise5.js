// Реализовать if для проверки доступа.

let accessAllowed;
if ((this.age >= 18 && this.age <= 35) && (this.paid === true && this.blocked === false && this.badUsername === false || this.isAdmin === true)) {
	console.log('Access allowed');
}
console.log('Access denied');