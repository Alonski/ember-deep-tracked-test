import { getOwner, setOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class Car {
    @service manager;
    @service store;

    constructor({ data, context } = {}) {
        setOwner(this, getOwner(context));
        set(this, "keys", Object.keys(data));
        for (let key of this.keys) {
            set(this, key, data[key]);
        }
    }

    changeColor(colorName) {
        console.log("Now attempting to retrieve the object from inside the tracked object...");
        let color = this.store.peekRecord("color", colorName);
        console.log("Changing color to " + color.name + "...");
        set(this, "color", color.name);
    }
}