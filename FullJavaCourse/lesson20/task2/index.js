class Vehicle {
    constructor(name, num) {
        this.name = name;
        this.numberOfWheels = num;
    }

    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
}

class Ship extends Vehicle {
    constructor(name, speed) {
        super(name, false);
        this.maxSpeed = speed;
    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
   }

   stop() {
       super.stop();
       console.log(`${this.name} lifting anchor down`);
   }
}

const ship1 = new Ship('Argo', 43);
/* console.log(ship1); */
ship1.stop();
ship1.move();
/* console.log(); */