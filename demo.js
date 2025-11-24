export default function init(widget) {
    console.log("[UserTrackerPlugin] Initialized");

    document.addEventListener("click", (e) => {
        console.log("[Tracker] Click:", e.target);
    });
}
