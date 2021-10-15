import Model, { attr } from '@ember-data/model';

export default class ColorModel extends Model {
    @attr() name;
}