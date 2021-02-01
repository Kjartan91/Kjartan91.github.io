class PickaxeUpgrade {
	constructor(name, basePrice, description, intUpgrade, multiplier) {
		let pickaxeUpgrade = new Image();
		pickaxeUpgrade.src = "img/Pickaxe_" + intUpgrade + ".png";
		var container = document.getElementById("pickaxeUpgrades");
		pickaxeUpgrade.className = "pickaxe-upgrade";
		if(localStorage.getItem("pickaxeUpgrade") >= intUpgrade)
			pickaxeUpgrade.style.opacity = 0.5;

		this.tooltip = null;

		pickaxeUpgrade.addEventListener("mouseover", function(Event) {
			this.tooltip = new Tooltip(name, description, basePrice, Event.pageX, Event.pageY);	
		});

		pickaxeUpgrade.addEventListener("click", function(Event) {
			if(localStorage.getItem("pickaxeUpgrade") < intUpgrade && buy(basePrice)) {
				pickaxeUpgrade.style.opacity = 0.5;
				changePickaxe(intUpgrade, multiplier);
			}
		});

		pickaxeUpgrade.addEventListener("mouseout", function(Event) {
			this.tooltip.removeTooltip();
		});

		container.appendChild(pickaxeUpgrade);
	}
}

function changePickaxe(intUpgrade, multiplier) {
	//document.getElementById("img-pickaxe").src = "img/Pickaxe_" + intUpgrade + ".png";
	cursor.setCursor(intUpgrade);
    sessionStorage.setItem("pickaxeUpgrade", intUpgrade);
    sessionStorage.setItem("pickaxeM", multiplier);
    saveGameLocal();
}

function addPickaxeUpgrades() {
 	var steinhakke = new PickaxeUpgrade("Steinhakke", 500, "Et lite rykk opp.", 1, 2.0)
	var jernhakke = new PickaxeUpgrade("Jernhakke", 10000, "Et lite rykk opp.", 2, 10.0)
	var gullhakke = new PickaxeUpgrade("Gullhakke", 50000, "Et lite rykk opp.", 3, 100.0)
	var diamanthakke = new PickaxeUpgrade("Diamanthakke", 500000, "Et lite rykk opp.", 4, 500.0, )
	var netheritehakke = new PickaxeUpgrade("Netheritehakke", 1000000, "Et lite rykk opp.", 5, 1000, )
	changePickaxe(sessionStorage.getItem("pickaxeUpgrade"), sessionStorage.getItem("pickaxeM"));
}