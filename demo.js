// ❗ PURE ES MODULE — NO BUILD STEP
export default function initPlugin(api) {
    api.log("User Tracker plugin running...");

    document.addEventListener("click", (e) => {
        api.log("User clicked:", e.target);
    });

    api.widget.chatManager.sendSystemMessage("Tracking enabled");
}
