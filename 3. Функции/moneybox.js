function MoneyBox() {
    this.amount = 0;
    this.addCoin = function() {
        return ++this.amount
    };
    this.getAmount = function() {
        console.log(this.amount)
    }
}

let moneyBox = new MoneyBox();

