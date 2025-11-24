export class UserTrackerPlugin {
    constructor(api, storage) {
        this.api = api;
        this.storage = storage;
        this.handleClick = this.handleClick.bind(this);
    }

    init() {
        //this.api.log("User Tracker plugin running...");

        // Log current page URL
        console.log("PAGE URL:", window.location.href);
        //this.api.log("PAGE URL:", window.location.href);

        document.addEventListener("click", this.handleClick);

        //this.api.widget.chatManager.sendSystemMessage("Tracking enabled");
    }

    handleClick(event) {
        console.log("User clicked:", event.target);

        //this.api.log("User clicked:", event.target);

        const msgs = this.storage.getMessages();
        //this.api.log("Existing messages:", msgs.length);
    }

    destroy() {
        document.removeEventListener("click", this.handleClick);
    }
}
