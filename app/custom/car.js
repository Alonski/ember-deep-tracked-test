import { getOwner, setOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class Car {
    @service manager;
    @service store;

    constructor({ data, context } = {}) {
        // this will enable service injection
        setOwner(this, getOwner(context));
        // this will copy all property keys from the original model object
        set(this, "keys", Object.keys(data));
        for (let key of this.keys) {
            set(this, key, data[key]);
        }
    }

    changeColor(colorName, { store } = {}) {
        console.log("Now attempting to retrieve the object from inside the tracked object...");
        let color;
        if (store) {
            // When the store is handed over from the calling context, it works
            color = store.peekRecord("color", colorName);
        } else {
            // When the store is accessed through injection, it does not work
            color = this.store.peekRecord("color", colorName);
        }
        console.log("Changing color to " + color.name + "...");
        set(this, "color", color.name);
        console.log("Color successfully changed.");
    }
}