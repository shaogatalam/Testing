export class CustomOfferPlugin {
    constructor(api, storage, meta) {
        this.api = api;
        this.storage = storage;

        // plugin-specific metadata
        this.meta = meta;  
    }

    init() {
        this.api.log("Offer Plugin Loaded", this.meta);

        const { modalCode, ctaLink, discount } = this.meta;

        const wrapper = document.createElement("div");
        wrapper.innerHTML = modalCode;
        document.body.appendChild(wrapper);

        wrapper.querySelector(".cta-btn")?.addEventListener("click", () => {
            window.open(ctaLink, "_blank");
        });
    }
    
    // constructor(api, storage, modalCode) {
    //     this.api = api;
    //     this.storage = storage;
    //     this.modalCode = modalCode;
    //     this.dom = null;
    // }

    // init() {
    //     console.log("Custom Offer Plugin Loaded");
    // }

    // destroy() {
    //     if (this.dom) this.dom.remove();
    //     this.api.log("Custom Offer Plugin Destroyed");
    // }
}
