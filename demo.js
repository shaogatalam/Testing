export class CustomOfferPlugin {
    constructor(api, storage, modalCode) {
        this.api = api;
        this.storage = storage;
        this.modalCode = modalCode;
        this.dom = null;
    }

    init() {
        console.log("Custom Offer Plugin Loaded");
    }

    destroy() {
        if (this.dom) this.dom.remove();
        this.api.log("Custom Offer Plugin Destroyed");
    }
}
