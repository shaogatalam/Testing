// plugin-user-tracker.js  (Pure ES Module)

export class UserTrackerPlugin {
    constructor(api, storage) {
        this.api = api;
        this.storage = storage;
        this.handleClick = this.handleClick.bind(this);
    }

    init() {
        this.api.log("User Tracker plugin running...");

        // Register event listener
        document.addEventListener("click", this.handleClick);

        // Example: Send system message
        this.api.widget.chatManager.sendSystemMessage("Tracking enabled");
    }

    handleClick(event) {
        this.api.log("User clicked:", event.target);

        // Example usage of StorageManager inside plugin
        const msgs = this.storage.getMessages();
        this.api.log("Existing messages:", msgs.length);
    }

    destroy() {
        // Clean up if widget unloads plugin
        document.removeEventListener("click", this.handleClick);
    }
}
