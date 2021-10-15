import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MainRoute extends Route {
    @service store;
    @service carService;

    async model() {
        console.log("Model hook running...");
        await this.store.findAll("car");
        await this.store.findAll("color");
    }

    afterModel() {
        this.carService.start();
    }
}