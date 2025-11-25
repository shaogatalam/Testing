export class CustomOfferPlugin {
    constructor(api, storage, meta) {
        this.api = api;
        this.storage = storage;
        this.meta = meta;  
    }

    init() {
        console.log("Offer Plugin Loaded");
        const { modalCode, ctaLink, discount } = this.meta;
        console.log(modalCode);
        // const wrapper = document.createElement("div");
        // wrapper.innerHTML = modalCode;
        // document.body.appendChild(wrapper);
        // wrapper.querySelector(".cta-btn")?.addEventListener("click", () => {
        //     window.open(ctaLink, "_blank");
        // });
    }
}
