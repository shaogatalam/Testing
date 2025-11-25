export class BlackFridayOfferPlugin {
    constructor(api, storage) {
        this.api = api;
        this.storage = storage;

        this.root = null;
        this.closeModal = this.closeModal.bind(this);
    }

    init() {
        this.api.log("Black Friday Offer Plugin Loaded");

        // Create DOM container
        this.root = document.createElement("div");
        this.root.id = "cf-offer-modal";
        this.root.style = `
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.55);
            z-index: 999999;
        `;

        // Modal HTML
        this.root.innerHTML = `
            <div style="
                background: white;
                padding: 24px;
                width: 360px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            ">
                <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 10px;">
                    Black Friday Mega Deal 🎉
                </h2>

                <p style="font-size: 15px; margin-bottom: 18px;">
                    Get 50% off on all premium plans today!
                </p>

                <button id="cf-offer-cta" style="
                    background: black;
                    color: white;
                    padding: 10px 18px;
                    border-radius: 8px;
                    cursor: pointer;
                    margin-right: 6px;
                ">Claim Offer</button>

                <button id="cf-offer-close" style="
                    background: #ccc;
                    padding: 10px 18px;
                    border-radius: 8px;
                    cursor: pointer;
                ">Close</button>
            </div>
        `;

        document.body.appendChild(this.root);

        // Event bindings
        this.root.querySelector("#cf-offer-close")
            .addEventListener("click", this.closeModal);

        this.root.querySelector("#cf-offer-cta")
            .addEventListener("click", () => {
                this.api.log("Offer claimed!");
                window.open("https://your-offer-page.com", "_blank");
            });
    }

    closeModal() {
        if (this.root) {
            this.root.remove();
        }
    }

    destroy() {
        this.closeModal();
        this.api.log("Offer Plugin Destroyed");
    }
}










// export class UserTrackerPlugin {
//     constructor(api, storage) {
//         this.api = api;
//         this.storage = storage;
//         this.handleClick = this.handleClick.bind(this);
//     }
//     init() {
//         //this.api.log("User Tracker plugin running...");
//         // Log current page URL
//         console.log("PAGE URL:", window.location.href);
//         //this.api.log("PAGE URL:", window.location.href);
//         document.addEventListener("click", this.handleClick);
//         //this.api.widget.chatManager.sendSystemMessage("Tracking enabled");
//     }
//     handleClick(event) {
//         console.log("User clicked:", event.target);
//         //this.api.log("User clicked:", event.target);
//         const msgs = this.storage.getMessages();
//         //this.api.log("Existing messages:", msgs.length);
//     }
//     destroy() {
//         document.removeEventListener("click", this.handleClick);
//     }
// }
