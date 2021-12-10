/**
 * Inheritance
 * 
 * When a class inherits properties and methods from a parent class
 * (called a super-class)
 */

class Vehicle {
	constructor(manufacturer, model, year) {
		this.manufacturer = manufacturer;
		this.model = model;
		this.year = year;
	}
}

class MotorVehicle extends Vehicle {
	hasEnginge = true

	constructor(manufacturer, model, year, horsePower) {
		super(manufacturer, model, year)

		this.horsePower = horsePower;
	}
}

class Car extends MotorVehicle {
	wheels = 4

	// constructor(manufacturer, model, year, horsePower) {
	// 	super(manufacturer, model, year, horsePower);
	// }
}

class MotorCycle extends MotorVehicle {
	wheels = 2

	// constructor(manufacturer, model, year, horsePower) {
	// 	super(manufacturer, model, year, horsePower);
	// }
}

const batMobile = new Car("Batman Inc", "Batmobile", 2099, 99999);
const batCycle = new MotorCycle("Batman Inc", "Batcycle", 2050, 5000);