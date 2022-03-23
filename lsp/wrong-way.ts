

class Vehicle { 
    
    powerOn(): void {

    }

    powerOff(): void {

    }
}

class Car extends Vehicle { 
    
    powerOn(): void {

    }

    powerOff(): void {

    }
}

class Bike extends Vehicle {
    powerOn(): void {
        throw new Error('this vehicle dos not need to be started')
    }
    
    powerOff(): void {
        throw new Error('this vehicle dos not need to be turned off')
    }
}