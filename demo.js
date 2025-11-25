export class CustomOfferPlugin {
    constructor(api, storage, modalCode) {
        this.api = api;
        this.storage = storage;
        this.modalCode = modalCode;
        this.dom = null;
    }

    init() {
        this.api.log("Custom Offer Plugin Loaded");

        if (!this.modalCode) {
            this.api.log("No modal code provided");
            return;
        }

        this.dom = document.createElement("div");
        this.dom.innerHTML = this.modalCode;

        document.body.appendChild(this.dom);
    }

    destroy() {
        if (this.dom) this.dom.remove();
        this.api.log("Custom Offer Plugin Destroyed");
    }
}
