import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from 'ember-deep-tracked';

export default class CarService extends Service {
    @service store;

    @tracked data = {
        cars: []
    };

    start() {
        console.log("Starting the test...");
        // 'cars' and 'colors' have been loaded in the route's model hook
        let cars = this.store.peekAll("car");
        let that = this;
        // we will create custom objects of the type 'class' from each 'car' record. The method to do that is defined on the model class
        cars.forEach(record => {
            let carCopy = record.createInstance();
            that.data.cars.push(carCopy);
            console.log("Added the " + carCopy.color + " car to the array.");
        });
        console.log("Attempting to paint the first car yellow...");
        // First test: accessing the 'yellow' color record in this context works
        let color = this.store.peekRecord("color", "yellow");
        if (color) {
            console.log("The color object was successfully retrieved from the store.");
            // We will call a method on the 'car' object that tries to access the store via injection --> fails
            this.data.cars[0].changeColor("yellow");
            // Alternatively, we can hand over the store to the 'car' object --> works
            //this.data.cars[0].changeColor("yellow", { store: this.store });
        }
    }
}