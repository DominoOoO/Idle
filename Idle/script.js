
let coins = 0;
let cps = 0;

let autoClickers = 0;
let autoCost = 10;

// Update UI
function updateUI() {
    document.getElementById("coins").textContent = coins;
    document.getElementById("cps").textContent = cps;
    document.getElementById("autoCost").textContent = autoCost;
}

// Manual click
document.getElementById("clickBtn").addEventListener("click", () => {
    coins++;
    updateUI();
});

// Buy auto clicker
document.getElementById("buyAuto").addEventListener("click", () => {
    if (coins >= autoCost) {
        coins -= autoCost;
        autoClickers++;
        cps++;
        autoCost = Math.floor(autoCost * 1.5);
        updateUI();
    }
});

// Idle loop (runs every second)
setInterval(() => {
    coins += cps;
    updateUI();
}, 1000);

// Initial update
updateUI();
