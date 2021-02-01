"use strict";
// Init session storage
if (!sessionStorage.getItem("diamonds"))
    sessionStorage.setItem("diamonds", "0");

if (!sessionStorage.getItem("pickaxeRotation"))
    sessionStorage.setItem("pickaxeRotation", "0");

if (!sessionStorage.getItem("isMuted"))
    sessionStorage.setItem("isMuted", false);

if (!sessionStorage.getItem("pickaxeUpgrade"))
    sessionStorage.setItem("pickaxeUpgrade", 0);

if (!sessionStorage.getItem("pickaxeM"))
    sessionStorage.setItem("pickaxeM", 1);



let audioPlayer = new AudioPlayer();
let cursor = new Cursor();
new Skybox();
new Martin();

addUpgrades();

//new MessageBox("Viktig melding", "Jeppsann", 4000);

// Mansion
   let mansion = new Image();
mansion.src = "img/Mansion.png";
mansion.style.position = "absolute";
mansion.style.pointerEvents = "none";
mansion.style.userSelect = "none";
let doc = document.getElementById("mainBody");
doc.appendChild(mansion);   

new DiamondOre();
addPickaxeUpgrades();

// Main shit
setInterval(function()
{
    // Update diamond counter
    let diamondCounter = document.querySelector(".diamondCounter p");
    let diamonds = sessionStorage.getItem("diamonds");
    diamondCounter.innerHTML = diamonds;

    // Animate pickaxe on mining
    const pickaxe = document.querySelector(".pickaxe");
    let pickaxeRotation = sessionStorage.getItem("pickaxeRotation");
    pickaxe.style.transform = `rotate(${pickaxeRotation}deg)`;

    if (pickaxeRotation > 0)
        pickaxeRotation -= 10;

    sessionStorage.setItem("pickaxeRotation", pickaxeRotation);
}, 40);

// Make pickaxe follow cursor
/* const mainBody = document.getElementById("mainBody");
mainBody.addEventListener("mousemove", function(Event)
{
    const pickaxe = document.querySelector(".pickaxe");
    let x = Event.pageX;
    let y = Event.pageY;

    pickaxe.style.left = `${x-15}px`;
    pickaxe.style.top = `${y-25}px`;
}); */

// Sound on/off
const soundBtn = document.getElementById("soundOpt");
soundBtn.addEventListener("click", function()
{
    let isMuted = sessionStorage.getItem("isMuted");
    // Hvis muted før man trykker på lyd-knapp
    if(isMuted == "true") {
        soundBtn.innerHTML = "🔈";
        sessionStorage.setItem("isMuted", false);
    }
    // Hvis lyd er på før man trykker på lyd-knapp
    else {
        soundBtn.innerHTML = "🔇";
        sessionStorage.setItem("isMuted", true);
    }
});

// Save diamonds and pickkaxe upgrades to local storage
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function()
{
    saveGameLocal();
});

// Get diamonds and pickaxe from local storage
const getSaveBtn = document.getElementById("getSaveBtn");
getSaveBtn.addEventListener("click", function()
{
    getGameLocal();
});