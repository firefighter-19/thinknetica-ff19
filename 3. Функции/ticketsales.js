function TicketSales() {
    let events = {};
    let storage = 0;
    let tickets = {
        '123456': 300,
    }

    function getRandomID(min = 500000, max = 999999) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let generatedID = Math.floor(Math.random() * (max - min)) + min;
        return generatedID;
    };

    this.getEvents = function() {
        return events;
    },
    
    this.getMoneyStorage = function() {
        return storage
    },

    this.showTickets = function() {
        return tickets
    },
    this.createEvent = function (name, cost) {
        if (typeof(name) !== 'string') {
            return 'Something went wrong'
        }
        return events[name] = cost;
    },

    this.buyTicket = function(name) {
        storage += events[name]
        let id = getRandomID();
        tickets[id] = events[name];
        return `You've bought a ticket for ${id}`
    },
    
    this.returnTicket = function(id) {
        storage -= tickets[id];
        delete tickets[id];
        return `You've returned a ticket for ${id}`;
    }
}

let ticketWindow = new TicketSales();

console.log(ticketWindow.createEvent('Mad', 300));
console.log(ticketWindow.createEvent('Good', 300));
console.log(ticketWindow.buyTicket('Mad'));
console.log(ticketWindow.buyTicket('Good'));
console.log (ticketWindow.getEvents());
console.log (ticketWindow.getMoneyStorage());
console.log (ticketWindow.showTickets());
console.log(ticketWindow.returnTicket('123456'));
console.log (ticketWindow.getMoneyStorage());
console.log (ticketWindow.showTickets());