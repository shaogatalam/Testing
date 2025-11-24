// Ensure global namespace exists
window.CommFlowPlugins = window.CommFlowPlugins || {};

// Plugin Class
class UserTrackerPlugin {
    constructor(widget) {
        this.widget = widget;
        this.events = [];
    }

    init() {
        console.log("[UserTrackerPlugin] Initialized");

        // Example: capture clicks
        document.addEventListener("click", (e) => {
            const info = {
                type: "click",
                tag: e.target.tagName,
                class: e.target.className,
                time: Date.now()
            };

            this.events.push(info);
            console.log("[Tracker] Click event:", info);
        });

        // Example: track widget open
        if (this.widget?.uiManager?.widgetContainer) {
            this.widget.uiManager.widgetContainer.addEventListener("click", () => {
                console.log("[Tracker] Widget interacted");
            });
        }
    }

    getEvents() {
        return this.events;
    }
}

// Register plugin globally
window.CommFlowPlugins["tracker"] = UserTrackerPlugin;
