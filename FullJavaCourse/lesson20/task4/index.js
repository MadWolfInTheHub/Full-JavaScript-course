class Order {
  dateCreated = new Date();
  isConfirmed = Boolean(false);
  dateConfirmed = Date();
  constructor(price, city, type, id) {
    this.price = Number(price);
    this.city = String(city);
    this.type = String(type);
    this.id = String(id);
  }

  checkPrice() {
    return this.price > 1000 ? true : false;
  }

  confirmOrder () {
    if (this.isConfirmed === true) {
      return;  
    }
    this.dateConfirmed = new Date();
    this.isConfirmed = true;
  }

  isValidType() {
    return this.type ==='Buy' || this.type ==='Sell' ? true : false;
  }
}
const order1 = new Order('1001', '1', 'Sell', '2345676');
console.log(order1);


console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1.isValidType());
console.log(order1);