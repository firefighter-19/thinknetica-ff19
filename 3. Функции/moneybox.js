function MoneyBox() {
    let amount = 0;

    this.amount = amount;
    this.addCoin = function() {
        return ++this.amount
    };
    this.getAmount = function() {
        console.log(this.amount)
    }
}

let moneyBox = new MoneyBox();


moneyBox.addCoin()
console.log(moneyBox.getAmount());