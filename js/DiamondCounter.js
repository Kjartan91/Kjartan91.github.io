class DiamondCounter
{
    constructor()
    {
        this.diaPerSec = 0;

        let diaCount = document.createElement("div");
        //diaCount.style.backgroundColor = "red";

        //img.style.backgroundImage = "url('img/DiamondOre.png')"
        //img.src = "img/DiamondOre.png";
        diaCount.id = "DiamondCounter";
        diaCount.style.userSelect = "none";
        //img.style.pointerEvents = "none";
        //img.setAttribute("draggable", false);
        diaCount.style.position = "absolute";
        diaCount.style.left = "50px";
        diaCount.style.bottom = "50px"

        diaCount.style.width = "350px";
        diaCount.style.height = "90px";
        diaCount.style.backgroundColor = "rgba(80, 80, 80, 0.4)";
        

        let doc = document.getElementById("mainBody");
        doc.appendChild(diaCount);

        // Image
        let diaImg = document.createElement("div");
        diaImg.style.backgroundImage = "url('img/Diamond.png')"
        diaImg.style.backgroundSize = "contain";
        diaImg.style.width = "90px";
        diaImg.style.height = "90px";
        

        diaCount.appendChild(diaImg);

        // Diamound counter
        let diaCountTxt = document.createElement("p");
        diaCountTxt.style.position = "absolute";
        diaCountTxt.style.top = "-40px";
        diaCountTxt.style.left = "100px";
        diaCountTxt.style.fontSize = "50px";
        diaCountTxt.innerHTML = "0";
        diaCount.appendChild(diaCountTxt);

        // Diamounds per sec
        let diaPerSecTxt = document.createElement("p");
        diaPerSecTxt.style.position = "absolute";
        diaPerSecTxt.style.top = "40px";
        diaPerSecTxt.style.left = "100px";
        diaPerSecTxt.style.fontSize = "20px";
        diaPerSecTxt.innerHTML = `0 dia per sec`;
        diaCount.appendChild(diaPerSecTxt);


        function interval (Event)
        {
            increaseDiamonds(this.diaPerSec / 5);

            //let testy = new Intl.NumberFormat().format()
           // diaCountTxt.innerHTML = curDiamonds().toLocaleString("ar-EG");
            diaCountTxt.innerHTML = convertDiaNum(curDiamonds());
            sessionStorage.getItem("diamonds");
            diaPerSecTxt.innerHTML = `${convertDiaNum(this.diaPerSec)} D/s`;
        }
        setInterval(interval.bind(this), 200)
    }

    increaseDiaPerSec(increase)
    {
        this.diaPerSec += increase;
    }
}