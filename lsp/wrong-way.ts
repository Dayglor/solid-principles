

class Vehicle { 
    
    powerOn(): void {
        return 'on';
    }

    powerOff(): void {
        return 'off';
    }
}

//Right
class Car extends Vehicle { 
    
}
//Right
class Bus extends Vehicle { 
    
}

//Wrong
class Bike extends Vehicle {
    powerOn(): void {
        throw new Error('this vehicle dos not need to be started')
    }
    
    powerOff(): void {
        throw new Error('this vehicle dos not need to be turned off')
    }
}