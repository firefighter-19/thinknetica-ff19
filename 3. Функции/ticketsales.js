function TicketSales() {
    let events = {};
    let storage = 0;
    let tickets = {
        '123456': 300,
    }

    function getRandomID(min = 100000, max = 999999) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let generatedID = Math.floor(Math.random() * (max - min)) + min;
        return generatedID;
    };

    this.events = function() {
        return events;
    };
    
    this.storage = function() {
        return storage
    },

    this.tickets = function() {
        return tickets
    },
    this.createEvent = function (name, cost) {
        if (typeof(name) !== 'string') {
            return 'Mistake'
        }
        return events = {event: name, price: cost}
    },

    this.buyTicket = function(name) {
        storage += events.price;
        let id = getRandomID();
        tickets[id] = events.price;
        return `You've bought a ticket for ${events[name]} ${id}`
    },
    
    this.returnTicket = function(id) {
        storage -= events.price;
        events[id] = null;
        return `You've returned a ticket for ${events.event}`;
    }
}

let ticketWindow = new TicketSales();

console.log(ticketWindow.createEvent('Mad', 300));
console.log(ticketWindow.buyTicket('Mad'));
console.log(ticketWindow.buyTicket('Mad'));
console.log (ticketWindow.events())
console.log (ticketWindow.storage())
console.log (ticketWindow.tickets())
console.log(ticketWindow.returnTicket('123456'));
console.log (ticketWindow.storage())
console.log (ticketWindow.tickets())