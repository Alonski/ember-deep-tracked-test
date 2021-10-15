import RESTAdapter from '@ember-data/adapter/rest';

export default class ColorAdapter extends RESTAdapter {

    urlForFindAll() {
        let url = "colors.json";
        return url;
    }

    // Needs to return false to prevent reloading data
    shouldBackgroundReloadAll() {
        return false;
    }
}