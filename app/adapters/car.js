import RESTAdapter from '@ember-data/adapter/rest';

export default class CarAdapter extends RESTAdapter {

    urlForFindAll() {
        let url = "cars.json";
        return url;
    }

    // Needs to return false to prevent reloading data
    shouldBackgroundReloadAll() {
        return false;
    }
}