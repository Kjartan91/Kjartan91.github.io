"use strict";

// Init session storage
if (!sessionStorage.getItem("diamonds"))
    sessionStorage.setItem("diamonds", "0");

if (!sessionStorage.getItem("diamondOreDeg"))
    sessionStorage.setItem("diamondOreDeg", "0");

if (!sessionStorage.getItem("diamondOreScale"))
    sessionStorage.setItem("diamondOreScale", "1");

if (!sessionStorage.getItem("martinDeg"))
    sessionStorage.setItem("martinDeg", "0");

if (!sessionStorage.getItem("martinDirection"))
    sessionStorage.setItem("martinDirection", "Right");

if (!sessionStorage.getItem("pickaxeRotation"))
    sessionStorage.setItem("pickaxeRotation", "0");

if (!sessionStorage.getItem("isMuted"))
    sessionStorage.setItem("isMuted", false);


// Main shit
setInterval(function()
{
    // Diamond ore animation
    const diamondOre = document.querySelector(".diamondOre");

    let degrees = +sessionStorage.getItem("diamondOreDeg");
    degrees = Math.floor(Math.random() * 20);

    let scale = +sessionStorage.getItem("diamondOreScale");
    if (scale < 1)
        scale += 0.3;
    diamondOre.style.transform = `rotate(${degrees}deg) scale(${scale})`;
    sessionStorage.setItem("diamondOreDeg", degrees);
    sessionStorage.setItem("diamondOreScale", scale);

    // Update diamond counter
    let diamondCounter = document.querySelector(".diamondCounter p");
    let diamonds = sessionStorage.getItem("diamonds");
    diamondCounter.innerHTML = diamonds;

    // Animate Martin
    const martin = document.querySelector(".martin");

    let martinDegrees = +sessionStorage.getItem("martinDeg");
    let martinDirection = sessionStorage.getItem("martinDirection");

    if (martinDirection == "Right")
        martinDegrees += 1;
    else if (martinDirection == "Left")
        martinDegrees -= 1;

    if (martinDegrees > 20)
        martinDirection = "Left";
    if (martinDegrees < -20)
        martinDirection = "Right";

    martin.style.transform = `rotate(${martinDegrees}deg)`;

    sessionStorage.setItem("martinDeg", martinDegrees);
    sessionStorage.setItem("martinDirection", martinDirection);

    // Animate pickaxe on mining
    const pickaxe = document.querySelector(".pickaxe");
    let pickaxeRotation = sessionStorage.getItem("pickaxeRotation");
    pickaxe.style.transform = `rotate(${pickaxeRotation}deg)`;

    if (pickaxeRotation > 0)
        pickaxeRotation -= 10;

    sessionStorage.setItem("pickaxeRotation", pickaxeRotation);
}, 40);

// Make pickaxe follow cursor
const mainBody = document.getElementById("mainBody");
mainBody.addEventListener("mousemove", function(Event)
{
    const pickaxe = document.querySelector(".pickaxe");
    let x = Event.pageX;
    let y = Event.pageY;

    pickaxe.style.left = `${x-20}px`;
    pickaxe.style.top = `${y-30}px`;
});


// Click diamond ore
const diamondOre = document.querySelector(".diamondOre");
diamondOre.addEventListener("click", function()
{
    // Set ore scale
    sessionStorage.setItem("diamondOreScale", "0.2");

    // Increase diamond counter
    let diamonds = +sessionStorage.getItem("diamonds");
    diamonds++;
    sessionStorage.setItem("diamonds", diamonds);

    // Play sound if not muted
    var audio = document.getElementById("audio-hakk");
    let isMuted = sessionStorage.getItem("isMuted");
    if(isMuted == "false") 
        audio.play();

    // Set pickaxeRotation
    sessionStorage.setItem("pickaxeRotation", "40");

    // Create diamond particles
    createDiamondParticles();
});

// Sound on/off
const soundButton = document.getElementById("soundOpt");
soundButton.addEventListener("click", function()
{
    let isMuted = sessionStorage.getItem("isMuted");
    // Hvis muted før man trykker på lyd-knapp
    if(isMuted == "true") {
        soundButton.innerHTML = "🔈";
        sessionStorage.setItem("isMuted", false);
    }
    // Hvis lyd er på før man trykker på lyd-knapp
    else {
        soundButton.innerHTML = "🔇";
        sessionStorage.setItem("isMuted", true);
    }
});


