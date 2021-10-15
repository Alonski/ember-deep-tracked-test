import Model, { attr } from '@ember-data/model';
import Car from '../custom/car';

export default class CarModel extends Model {
    @attr() color;

    createInstance() {
        let data = JSON.parse(JSON.stringify(this.serialize()));
        data.id = this.id;
        let car = new Car({ data: data, context: this });
        return car;
    }
}