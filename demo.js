export class BlackFridayOfferPlugin {
    constructor(api, storage, modalCode) {
        this.api = api;
        this.storage = storage;
        this.modalCode = modalCode;

        this.root = null;
        this.closeModal = this.closeModal.bind(this);
    }

    init() {
        this.api.log("Offer plugin active");

        // Create modal using widget's renderer
        this.root = this.api.renderCustomHtml(this.modalCode);

        // Auto-bind any close buttons
        this.root.querySelectorAll("[data-close]")
            .forEach(btn => btn.addEventListener("click", this.closeModal));

        // Auto-bind CTA button if exists
        const cta = this.root.querySelector("[data-cta]");
        if (cta) {
            cta.addEventListener("click", () => {
                this.api.log("User clicked CTA");
            });
        }
    }

    closeModal() {
        if (this.root) this.root.remove();
    }

    destroy() {
        this.closeModal();
        this.api.log("Offer plugin destroyed");
    }
}
