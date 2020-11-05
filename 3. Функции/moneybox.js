function MoneyBox() {
    let amount = 0;
    this.addCoin = function() {
        return ++amount
    };
    this.getAmount = function() {
        console.log(amount)
    }
}

let moneyBox = new MoneyBox();


moneyBox.addCoin()
console.log(moneyBox.getAmount());
