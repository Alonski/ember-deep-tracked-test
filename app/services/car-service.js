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
        let cars = this.store.peekAll("car");
        let that = this;
        cars.forEach(element => {
            let carCopy = element.createInstance();
            that.data.cars.push(carCopy);
            console.log("Added the " + carCopy.color + " car to the array.");
        });
        console.log("Attempting to paint the first car yellow...");
        let color = this.store.peekRecord("color", "yellow");
        if (color) {
            console.log("The color object was successfully retrieved from the store.");
            this.data.cars[0].changeColor("yellow");
        }
    }
}